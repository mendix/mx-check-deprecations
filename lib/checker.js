var _ = require( 'lodash'),
  fs = require('fs'),
  path = require('path'),
  Excel = require('./excel'),
  MpkArchive = require('./mpk'),
  deprecations_list = require('../deprecations')['mx6']; // for now we only check for mx6 deprecations

var excelOutput = null;
var write = false;
var deprecations = [];

function checkDeprecations (line, linenumber, deprecationList) {
  var ret = {};
  _.each(deprecationList, function (deprecation) {
    var reg;
    if (_.isRegExp(deprecation.reg)) {
      reg = deprecation.reg;
    } else if (_.isString(deprecation.reg)) {
      reg = new RegExp(deprecation.reg.replace(/\./g,"\."));
    } else {
      console.log(deprecation);
      console.log('Error, unknown regex');
      return true;
    }
    var match = line.match(reg);
    if (match) {
      ret['line:'+ linenumber + ' // column:' + match.index + ' // deprecation:[ ' + deprecation.name + ' ]'] = {
        line: linenumber,
        column: match.index,
        deprecation: deprecation.name,
        match: getStrSlice(match.input.replace(/\t/g, ' ').replace(/\r/g, ''), match.index),
        solution: deprecation.solution
      };
    }
  });
  return ret;
}

function getStrSlice (str, index) {
  var bound = 100,
    lower = index - bound;
  if (lower < 0) {
    lower = 0;
  }
  return str.slice(lower, lower + (2 * bound));
}

function check (options) {
  var fileList = options.files,
      currentFolder = options.folder,
      deprecationList = options.list;

  _.each(fileList, function (file) {
    var p = currentFolder + file;
    var shown = options.verbose;
    try {
      var mpk = new MpkArchive(p);
      if (options.verbose) {
        console.log('================================ checking ================================');
        console.log('File: ' + mpk.path.replace(currentFolder, ''));
        console.dir(mpk.widget);
        console.log('Package.xml version: ' + mpk.widgetVersion);
        console.log('==========================================================================\n');
      }
      var jsEntries = mpk.getFiles('js');
      _.each(jsEntries, function (entry) {
        var contents = mpk.readFile(entry.path).split(/\n/),
          i = 1,
          v = [];

        if (entry.path.indexOf('/lib/') !== -1 || entry.path.indexOf('jquery') !== -1) {
          return true;
        }

        _.each(contents, function (line) {
          var deprecations = checkDeprecations(line, i, deprecationList);
          if (_.keys(deprecations).length) {
            v.push(deprecations);
          }
          i++;
        });

        if (v.length) {
          write = true;
          if (!options.verbose && !shown) {
            shown = true;
            console.log('================================ checking ================================');
            console.log('File: ' + mpk.path.replace(currentFolder, ''));
            console.dir(mpk.widget);
            console.log('Package.xml version: ' + mpk.widgetVersion);
            console.log('==========================================================================\n');
          }
          console.log('==========================\n' + mpk.path.replace(currentFolder, '') + ' // ' + entry.path);
          console.log('==========================\nPossible deprecations: ' + v.length + '\n');
          console.log('Deprecations:');
          _.each(v, function (deprecation) {
            _.each(_.keys(deprecation), function (vkey) {
              if (excelOutput) {
                excelOutput.addLine([
                  mpk.path.replace(currentFolder, ''),
                  mpk.widgetVersion,
                  entry.path,
                  deprecation[vkey]['line'],
                  deprecation[vkey]['column'],
                  deprecation[vkey]['deprecation'],
                  deprecation[vkey]['solution'],
                  deprecation[vkey]['match']
                ]);
              }
              console.log(vkey);
              console.log(JSON.stringify(_.pick(deprecation[vkey], ['match', 'solution']), null, 4));
              console.log();
            });
          });

          console.log();
        }
      });
    } catch (e) {
      if (options.verbose) {
        console.error('Error for : ', p, ' :: ', e);
      }      
    }
  });
  if (excelOutput && write) {
    excelOutput.writeFile();
  }
}

function checkFiles (options) {
  var folder = options.folder;
  if (options.toExcel) {
    excelOutput = new Excel();
    excelOutput.setHeader([
      'file',
      'xml version',
      '.js file',
      'line',
      'column',
      'deprecation',
      'solution',
      'match'
    ]);
  }
  var files = _.filter((options.fileList.length === 0 ? fs.readdirSync(folder) : options.fileList), function (file) {
    return path.parse(file)['ext'] === '.mpk';
  });
  if (files.length === 0) {
    console.log('No .mpk files found');
    return false;
  }

  check({
    files: files,
    folder: folder,
    verbose: options.verbose,
    list: typeof options.searchString === 'string' ? [{
      name: options.searchString,
      reg: options.searchString,
      solution: null
    }] : deprecations_list
  });

}

module.exports = {
  checkFiles: checkFiles
};

const _ = require( 'lodash');
const fs = require('fs');
const path = require('path');
const Excel = require('./excel');
const MpkArchive = require('./mpk');
const chalk = require('chalk');
const Promise = require('bluebird');

const deprecations_list = require('../deprecations'); // for now we only check for mx6 deprecations

let excelOutput = null;
let write = false;
let spotted = 0;

const cyan = msg => chalk.cyan(msg);
const getStrSlice = (str, index) => {
  let bound = 100;
  let lower = index - bound;
  if (lower < 0) {
    lower = 0;
  }
  return str.slice(lower, lower + (2 * bound));
}

const checkDeprecation = (line, linenumber, deprecation) => new Promise(resolve => {
  let reg = null;
  if (_.isRegExp(deprecation.reg)) {
    reg = deprecation.reg;
  } else if (_.isString(deprecation.reg)) {
    reg = new RegExp(deprecation.reg.replace(/\./g,"\."));
  } else {
    console.log(deprecation);
    console.log(`Error, unknown regex: ${deprecation}`);
    resolve(null);
  }
  const match = line.match(reg);
  if (match) {
    const slice = (getStrSlice(match.input.replace(/\t/g, ' ').replace(/\r/g, ''), match.index) || '').trim();
    if (slice.indexOf('\/\/') !== 0) { // ignore comments
      resolve({
        line: linenumber,
        column: match.index,
        deprecation: deprecation,
        match: slice
      })
    } else {
      resolve(null);
    }
  } else {
    resolve(null);
  }
});

const checkDeprecations = (line, linenumber, deprecationList) => {
  return Promise.all(_.map(deprecationList, dep => checkDeprecation(line, linenumber, dep))).then(res => _.compact(res));
}

const checkEntry = (entry, mpk, options) => {
  let i = 0;
  return Promise.all(
    _.map(mpk.readFile(entry.path).split(/\n/), line => checkDeprecations(line, i++, options.list))
  ).then(entryresult => {
    return {
      entry: entry,
      result: _.flatten(entryresult)
    };
  });
}

const checkFile = (mpk, options) => {
  const jsEntries = _.filter(mpk.getFiles('js'), js => js.path.indexOf('/lib/') === -1 && js.path.indexOf('jquery') === -1);
  if (jsEntries.length === 0) {
    console.log(mpk);
    console.log(`${mpk.path} has no Javascript files`);
    return false;
  } else {
    return Promise
      .all(_.map(jsEntries, entry => checkEntry(entry, mpk, options)))
      .then(entryResults => {
        const hasResults = _.some(entryResults, eR => eR.result.length > 0);
        if (options.verbose || hasResults) {
          write = true;
          console.log(' ==========================================================================');
          console.log(` ${cyan('File:')}                ${mpk.path.replace(options.folder, '')}`);
          console.log(` ${cyan('Widgets:')}`);
          _.forIn(mpk.widget, (v, k) => {
            console.log(`                      ${k} : ${v}`);
          });
          console.log(` ${cyan('Package.xml version:')} ${mpk.widgetVersion}`);
          console.log(' ==========================================================================\n');
        }
        _.each(entryResults, entryResult => {
          if (entryResult.result.length > 0) {
            console.log(` ${cyan(entryResult.entry.path)} results:\n`);
            _.each(entryResult.result, res => {
              spotted++;
              let line = `${cyan(' line:')} ${res.line} || ${cyan('column:')} ${res.column} `;
              line += options.search ? '' : `\n ${cyan('deprecation:')} ${res.deprecation.name} `;
              line += res.deprecation.solution ? `|| ${cyan('solution:')} ${res.deprecation.solution}` : '';
              line += res.deprecation.version ? `|| ${cyan('version:')} ${res.deprecation.version}` : '';
              console.log(line);
              console.log(` ${cyan('match: ')} ${chalk.dim(res.match)}\n`);

              if (excelOutput) {
                excelOutput.addLine([
                  mpk.path.replace(options.folder, ''),
                  mpk.widgetVersion,
                  entryResult.entry.path,
                  res.line,
                  res.column,
                  res.deprecation.name,
                  res.deprecation.solution,
                  res.deprecation.version,
                  res.match
                ]);
              }
            });
            console.log('\n');
          } else if (options.verbose){
            console.log(` ${cyan(entryResult.entry.path)} has no results`);
          }
        })
        return true;
        //console.log('\n');
      }, err => {
        console.log(err);
      })
      .then(() => {
        return true;
      })
  }
}

const checkFiles = (options) => {
  const fileList = options.files;
  console.log(` Reading ${cyan(fileList.length)} files`);
  const widgets = _.chain(fileList)
    .map(file => {
      let mpk;
      try {
        mpk = new MpkArchive(options.folder + file);
        if (mpk && mpk.type !== 'widget') {
          if (options.verbose) {
            console.log(`${file} is not a widget, has type: ${mpk.type}`);
          }
          mpk = null;
        }
      } catch (e) {
        if (options.verbose) {
          console.log(`Error reading: ${file}: ${e}`)
        }
        mpk = null;
      }
      return mpk
    })
    .compact()
    .value();

  console.log(` Checking ${cyan(widgets.length)} widgets`);
  Promise.all(_.map(widgets, widget => checkFile(widget, options))).then(() => {
    if (excelOutput && write) {
      excelOutput.writeFile('deprecations.xlsx');
    }
    console.log(' ==========================================================================');
    console.log(` Done: Checker spotted ${cyan(spotted)} results`);
    console.log(' ==========================================================================');
  })
}

module.exports = function check (options) {
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
      'version',
      'match'
    ]);
  }
  var files = _.filter((options.fileList.length === 0 ? fs.readdirSync(folder) : options.fileList), file => path.parse(file)['ext'] === '.mpk');
  if (files.length === 0) {
    console.log('No .mpk files found');
    return false;
  }

  checkFiles({
    files: files,
    folder: folder,
    verbose: options.verbose,
    search: typeof options.searchString === 'string' ? true : false,
    list: typeof options.searchString === 'string' ? [{
      name: options.searchString,
      reg: options.searchString,
      solution: null,
      version: null
    }] : deprecations_list
  });
}

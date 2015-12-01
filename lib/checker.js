var _ = require( 'lodash'),
	fs = require('fs'),
	path = require('path'),
	Excel = require('./excel'),
	MpkArchive = require('./mpk'),
	deprecations_list = require('../deprecations')['mx6']; // for now we only check for mx6 deprecations

var excelOutput = null;
var write = false;
var deprecations = [];

function checkDeprecations (line, linenumber) {
	var ret = {};
	_.each(deprecations_list, function (deprecation) {
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
				match: match.input.replace(/\t/g, ' ').replace(/\r/g, ''),
				solution: deprecation.solution
			};
		}
	});
	return ret;
}

function check (fileList, currentFolder) {
	_.each(fileList, function (file) {
		var p = currentFolder + file;
		try {
			var mpk = new MpkArchive(p);
			console.log('================================ checking ================================');
			console.log('File: ' + mpk.path.replace(currentFolder, ''));
			console.dir(mpk.widget);
			console.log('Package.xml version: ' + mpk.widgetVersion);
			console.log('==========================================================================\n');
			var jsEntries = mpk.getFiles('js');
			_.each(jsEntries, function (entry) {
				var contents = mpk.readFile(entry.path).split(/\n/),
					i = 1,
					v = [];

				if (entry.path.indexOf('/lib/') !== -1 || entry.path.indexOf('jquery') !== -1) {
					return true;
				}

				_.each(contents, function (line) {
					var deprecations = checkDeprecations(line, i);
					if (_.keys(deprecations).length) {
						v.push(deprecations);
					}
					i++;
				});

				if (v.length) {
					write = true;
					console.log('==========================\n' + mpk.path.replace(currentFolder, '') + ' // ' + entry.path);
					console.log('==========================\nPossible deprecations: ' + v.length + '\n');
					console.log('Deprecations:')
					_.each(v, function (deprecation) {
						_.each(_.keys(deprecation), function (vkey) {
							if (excelOutput) {
								excelOutput.addLine([
									mpk.path.replace(currentFolder, ''),
									entry.path,
									deprecation[vkey]['line'],
									deprecation[vkey]['column'],
									deprecation[vkey]['deprecation'],
									deprecation[vkey]['solution'],
									deprecation[vkey]['match'].splice(0,500)
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
			console.log('Error for : ', p);
			console.log(e);
		}
	});
	if (excelOutput && write) {
		excelOutput.writeFile();
	}
}

function checkFiles (fileList, folder, outputToExcel) {
	if (outputToExcel) {
		excelOutput = new Excel();
		excelOutput.setHeader([
			'file',
			'.js file',
			'line',
			'column',
			'deprecation',
			'solution',
			'match'
		]);
	}
	var files = _.filter((fileList.length === 0 ? fs.readdirSync(folder) : fileList), function (file) {
		var ext = path.parse(file)['ext'];
		return ext === '.mpk';
	});
	if (files.length === 0) {
		console.log('No .mpk files found');
		return false;
	}
	check(files, folder);
}

module.exports = {
	checkFiles: checkFiles
};
'use strict';

var optimist = require('optimist'),
    chalk = require('chalk'),
    _ = require('lodash'),
    updateNotifier = require('update-notifier'),
    currentFolder = require('path').resolve('./') + '/',
    pkg = require('./package.json');

var Checker = require('./lib/checker');
var banner = [
    '',
    '',
    ' ================ Mendix Check Deprecations for Mendix 6 ================',
    '                           -- version ' + pkg.version + ' --',
    ''
].join('\n');

var argv = optimist
  .usage([
    ' Usage : ' + chalk.bold.cyan('mx-check-deprecations [OPTIONS] [<file.mpk> <file.mpk> <file.mpk> ... ]'),
    '',
        ' Either check individual files, or the whole folder'
  ].join('\n'))
  .boolean('d')
  .alias('d', 'update-deprecations')
    .describe('d', 'Update the list with deprecations from Github (not implemented yet)')
    .boolean('u')
  .alias('u', 'update')
        .describe('u', 'Checks if there is an update for mx-check-deprecations')
    .boolean('e')
    .alias('e', 'excel')
        .describe('e', 'Output to Excel file : deprecations.xlsx')
  .alias('h', 'help')
        .describe('h', 'Shows this help screen')
  .argv;

var files = argv._;

console.log(banner);

if (argv.update) {
    console.log(chalk.cyan('\n Checking for an update'));
    updateNotifier({
        pkg: pkg,
        callback: function(err, update) {
            if (err) {
                console.log(chalk.red('\n\n Error checking the update : '), err);
            } else {
                if (update.latest !== update.current) {
                    console.log(chalk.green(' Update available! Run ') + chalk.bold.cyan('npm update -g mx-check-deprecations') + chalk.green(' to install version ') + chalk.bold.cyan(update.latest) + '\n');
                } else {
                    console.log(chalk.green(' You are running the latest version :-)\n'));
                }
            }
            process.exit(0);
        }
    });
} else if (argv.help) {
    console.log(optimist.help());
    process.exit(0);
} else {
    Checker.checkFiles(files, currentFolder, argv.excel);
}

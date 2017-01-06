const yargs = require('yargs');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const currentFolder = require('path').resolve('./') + '/';
const pkg = require('../package.json');
const check = require('./lib/checker');

const banner = [
    '',
    ' ================ Mendix Check Deprecations for Mendix ================ ',
    ` Version: ${chalk.cyan(pkg.version)}`,
    '',
    ' ======================================================================',
    ''
].join('\n');

const argv = yargs
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
  .boolean('v')
    .alias('v', 'verbose')
    .describe('v', 'Verbose output')
  .string('s')
    .alias('s', 'string')
    .describe('s', 'Search for a specific string')
  .help('h')
  .alias('h', 'help')
    .describe('h', 'Shows this help screen')
  .check((hash) => {
    if (typeof hash.string !== 'undefined' && hash.string === '') {
      return Error(chalk.red('string cannot be empty\n'));
    }
    if (hash.d) {
      return Error(chalk.red('not implemented yet\n'));
    }
    return true;
  })
  .argv;

const files = argv._;

console.log(banner);

if (argv.update) {
  console.log(chalk.cyan('\n Checking for an update'));
  updateNotifier({
    pkg: pkg,
    callback: (err, update) => {
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
} else {
  check({
    fileList: files,
    folder: currentFolder,
    toExcel: argv.excel,
    searchString: argv.string,
    verbose: argv.verbose
  });
}

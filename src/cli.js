const yargs = require('yargs');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const Promise = require('bluebird');
const fs = require('fs');
const jsdiff = require('diff');
const currentFolder = require('path').resolve('./') + '/';
const pkg = require('../package.json');
const rp = require('request-promise');
const check = require('./lib/checker');
const path = require('path');

const deprecationLocation = path.resolve(__dirname, 'deprecations.js'),
      deprecationRemote = pkg.deprecation_url;

const writeFile = Promise.promisify(fs.writeFile);

const banner = [
    '',
    ' ================== Mendix Check Deprecations for Mendix ================== ',
    ` Version: ${chalk.cyan(pkg.version)}`,
    ' ==========================================================================',
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
  .number('f')
    .alias('f', 'filter')
    .describe('f', 'Filter on Mendix version (number)')
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
    if (typeof hash.filter !== 'undefined' && isNaN(hash.filter)) {
      return Error(chalk.red('Please set a correct filter'));
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
} else if (argv.d) {
  console.log(` Updating from ${chalk.cyan(deprecationRemote)}`);
  const localFile = fs.readFileSync(deprecationLocation).toString();
  const rOptions = {
    uri: deprecationRemote
  };
  rp(rOptions)
    .then(content => {
      console.log(' Downloaded, checking');
      const diff = jsdiff.diffChars(localFile, content).filter(part => part.add || part.removed);
      if (diff.length > 0) {
        console.log(` Found differences, writing deprecation to ${chalk.cyan(deprecationLocation)}`);
        writeFile(deprecationLocation, content, 'utf-8')
          .then(() => {
            console.log(' Update done\n');
          })
          .catch(e => {
            console.log(chalk.red(` Error writing file: `), e);
          })
      } else {
        console.log(' Local deprecations are not different from remote. Skipping update\n');
      }
    })
    .catch(err => {
      console.log(chalk.red(' Error updating deprecations: '), err.error);
    })
} else {
  check({
    fileList: files,
    folder: currentFolder,
    toExcel: argv.excel,
    version: argv.f,
    searchString: argv.string,
    verbose: argv.verbose
  });
}

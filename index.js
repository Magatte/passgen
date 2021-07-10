#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const clearPassword = require('./utils/clearPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;

program.version('1.0.0').description('Simple password generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to password.txt')
    .option('-c, --clear', 'delete all saved passwords')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const {length, save, clear, numbers, symbols} = program.opts();

// Clear passwords and exit
if (clear) {
    clearPassword();
    log(chalk.green('Passwords cleared'));
    process.exit(0);
}

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
    savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));
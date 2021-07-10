const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 765, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to password.txt'));
            })
        });
    });
}

module.exports = savePassword;
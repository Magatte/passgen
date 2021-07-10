const { clear } = require('console');
const fs = require('fs-extra');
const path = require('path');

const clearPassword = () => {
    fs.removeSync(path.join(__dirname, '../', 'password.txt'));
}

module.exports =  clearPassword;
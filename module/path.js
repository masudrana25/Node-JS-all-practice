// console.log(__dirname);
// console.log(__filename);

const path = require('path');

const extensionName = path.extname('index.js');
console.log(extensionName);

const joinName = path.join(__dirname + '/view');
const joinName2 = path.join(__dirname + '/../view');
const joinName3 = path.join(__dirname + '/../../view');
console.log(joinName);
console.log(joinName2);
console.log(joinName3);
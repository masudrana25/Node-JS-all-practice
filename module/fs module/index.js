const fs = require('fs');

// fs.writeFile::: akta file create korbey. problem :: abar new kono data add korley overwrite korby. ager data thakbey na. tai useful na
// fs.writeFile('demo1.txt', 'This is demo1 text file.', (err) => {
//   if (err) { console.log(err); } else { console.log('success'); }
// });

//fa.appendFile ===  new file create korbey and overwrite na korey data store korby.
// fs.appendFile('demo2.txt', 'This is demo2  text file, line 1. ', (err) => {
//    if (err) { console.log(err); } else { console.log('success'); }
// })
// fs.appendFile('demo2.txt', 'This is demo2  text file, line 2. ', (err) => {
//   if (err) { console.log(err); } else { console.log('success'); }
// });

// fs.readFile === ager kono file er data read korty
// fs.readFile('demo2.txt', 'utf-8', (err, data) => {
//   if (err) { console.log(err); } else { console.log(data); }
// });

// //fs.rename ===  rename existing file
// fs.rename('demo2.txt', 'demo2_new.txt', (err) => {
//   if (err) { console.log(err); } else { console.log('success'); }
// });

//fs.unlink === kono file delete korty
// fs.unlink('demo2_new.txt', (err) => {
//    if (err) { console.log(err); } else { console.log('success'); }
// });

// fs.exists === kono file achy ki na check korey
// fs.exists('demo2_new.txt', (result) => {
//    if (result) { console.log('found'); } else { console.log('not found'); }
// });
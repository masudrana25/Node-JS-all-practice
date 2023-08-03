// 1st way to read
// const totalInfo = require('./student');
// const name = totalInfo.name; const age = totalInfo.age; const id = totalInfo.id;
// console.log(name(), age(), id());

//2nd way to read data
// const totalInfo = require('./student');
// const name = totalInfo.name; const age = totalInfo.age; const id = totalInfo.id;
// console.log(name(), age(), id());

//2.5th way to read data
const {name,age,id} = require('./student');
console.log(name(), age(), id());

//3rd way to read data == not working yet
// import {name} from 'student';
// const name_m = name; 
// console.log(name_m());


// for 1st and 2nd way to read or export
const name = () => {return 'Masud'}
const age = () => {return '25'}
const id = () => {return 24}

//1st way to export
// exports.name = name; exports.age = age; exports.id = id;

//2nd way to export
module.exports = {
  name,
  age,
  id
}

//3rd way to export not working yet
// export const name = () => {
//   return 'Masud';
// }
// export const age = () => {
//   return '25';
// }
// export const id = () => {
//   return 24;
// }

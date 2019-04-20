const validator = require('validator');
const notes = require('./notes.js');

let firstNote = notes("Yoooo this is a note");

console.log(firstNote);
console.log(validator.isEmail('yo@gmail.com'));
console.log(validator.isURL('http://www.maslolabs.com'));




// const add = require('./utils.js');
// const name = require('./yo.js');

// const sum = add(2, 9);

// console.log(sum);
// console.log(name);

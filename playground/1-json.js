const fs = require('fs');

// const book = {
//     book: 'Ego is your Enemy',
//     author: 'Ryan Holiday'
// }

// // takes an obj, arr, and value and converts to JSON string 
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// // takes the JSON string and gives back the obj 
// const parsedJSON = JSON.parse(bookJSON);
// console.log(parsedJSON);
// console.log(parsedJSON.author);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataString = dataBuffer.toString();
// const data = JSON.parse(dataString);
// console.log(data.book);

//Part1
const myBuffer = fs.readFileSync('1-json.json');
const dataJSON = myBuffer.toString();
const uesr = JSON.parse(dataJSON);
console.log(user.name);

//Part2
const newData = {
    name: 'Macy',
    age: 27, 
    planet: 'earth'
}

const myNewString = JSON.stringify(newData);
fs.writeFileSync('1-json.json', myNewString);

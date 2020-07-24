const fs = require('fs');
// const book = {
//   title: 'IOT',
//   author: 'Robert',
// };
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// console.log(bookJSON);
// const parsebook = JSON.parse(bookJSON);
// console.log(parsebook.title);
// const readData = fs.readFileSync('1-json.json');
// console.log(readData.toString());
// const jsonData = readData.toString();
// const book1 = JSON.parse(jsonData);
// console.log(book1.author);

const jsonData = fs.readFileSync('1-json.json');
const parseJSON = JSON.parse(jsonData.toString());
parseJSON.name = 'Akrithi';
parseJSON.age = '22';
const data = JSON.stringify(parseJSON);
fs.writeFileSync('1-json.json', data);

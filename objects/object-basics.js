// all properties are related to a single entity
let book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pageCount: 700
};

console.log(book); // this prints the whole object
console.log(book.title); // this targets the title property

book.title = '' // can target and change the property value

let person = {
    name: 'Jamison Frye',
    age: 34,
    location: 'Bington'
};

console.log(`${person.name} is ${person.age} years old`);
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} years old`);
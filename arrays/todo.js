// create array of 5 todo's
// print the length
// print the first and second to last items
const todoList = ['yoga!!', 'finish updating sharepoint', 'be a react maniac', 'clean all the things', 'read all the books'];

// console.log(`You have ${todoList.length} things to do today!`);
// console.log(`First: ${todoList[0]}, and second to last: ${todoList[todoList.length - 2]}`);

// use length method inside the bracket notation to target an unknown location

// delete 3rd item
// add a new item on the end
// remove the first item

todoList.splice(2, 1); // should remove react maniac
todoList.push('new last notes');
todoList.shift();



console.log(todoList);
const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4'];
// console.log(notes);

// how many items in an array
// console.log(notes.length);

// bracket notation
notes[2]; // the index number goes inside the brackets

// to target the last item
notes.length - 1;


// methods to manipulate the array
// push adds an item to the end of the array
notes.push('Note 5');

// pop removes an item from the end of the array
notes.pop();

// shift removes the first item in the array and returns the first time
notes.shift();
notes.unshift('add this note'); // adds this note to the beginning of the array

notes.splice();




console.log(notes.length);
console.log(notes);
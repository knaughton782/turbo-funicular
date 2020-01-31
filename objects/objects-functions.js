let firstBook = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    pageCount: 700
};

let secondBook = {
    title: 'Atomic Habits',
    author: 'James Clear',
    pageCount: 300
};

// create a function and pass in an object as the argument 
// to get properties for multiple objects
let getBook = function(book) {
    // console.log(`${book.title} is by ${book.author}`);

    // option to return multiple values in an object
    return {
        summary: `${book.title} is by ${book.author}`,
        pageCount: `${book.title} is ${book.pageCount} pages long`
    }

}
console.log(getBook(firstBook));
console.log(getBook(secondBook));


// let fahrenheit = 50; // 0c - 273.15k
// let celcius = (fahrenheit - 32) * (5 / 9);
// let kelvin = (fahrenheit + 459.67) * 5 / 9;

let tempConversion = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 / 9)
    }
}
let temp = tempConversion(32);
console.log(`${temp.fahrenheit} and ${temp.kelvin} and ${temp.celcius}`);

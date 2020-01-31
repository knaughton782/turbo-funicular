// function has three parts: input (arguments), code, output (return value)

let square = function (num) {
    let result = num * num;
    return result
}

console.log(square(15));

let value = square(10); //stores returned value in a variable

console.log(value);

//challenge
//convertFahrenheitToCelcius

let convertFahrenheitToCelcius = function (tempF) {
    let tempCel = (tempF - 32) * 1.8;

    return tempCel;
}

console.log(convertFahrenheitToCelcius(0));
console.log(convertFahrenheitToCelcius(15));
console.log(convertFahrenheitToCelcius(500));
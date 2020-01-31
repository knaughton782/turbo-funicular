let add = function (a, b, c) {
    return a + b + c; 
}
let result = add(15, 75, 2000);
console.log(result);

// default value
let getScoreText = function (name, score = 0) {
    return `Name:  ${name}, Score: ${score}`;
}
let scoreText = getScoreText();


//total, tipPercent

let calcTip = function (total, tipPercent = .2) {
    return total * tipPercent;
}
let tipAmount = calcTip(45.5, .2);
console.log(tipAmount);

let calcTotalWithTip = function (total, tipAmount) {
    return total + tipAmount;
}
let fullTotal = calcTotalWithTip(45.5, tipAmount);
console.log(fullTotal);
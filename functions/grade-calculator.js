let gradeCalculator = function (score) {
    if (score <= 59) {
        console.log(`You got an F, ${score}%`);
    } else if (score <= 69) {
        console.log(`You got a D, ${score}%`);
    } else if (score <= 79) {
        console.log(`You got a B, ${score}%`);
    } else {
        console.log(`You got an A, ${score}%`);
    }
}
let getGrade = gradeCalculator(75);
// console.log(getGrade);
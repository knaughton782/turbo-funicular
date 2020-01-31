let temp = 75;
let isFreezing = temp >= 31;
// console.log(isFreezing);

// isFreezing = temp !== 31;

// console.log(isFreezing);

let age = 49;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(`child: ${isChild}, senior: ${isSenior}`);



if (isFreezing) {
    console.log('Not Cold!!!');
}


if (isChild) {
    console.log('You can get in for half price if you are with an adult who is purchasing a ticket as well.');
} else if (isSenior) {
    console.log('Tuesday is Seniors Get in Free day!!');
} else {
    console.log('You have to pay full price cause you are a middle aged adult');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('here are vegan meals');
} else if (isGuestOneVegan && !isGuestTwoVegan) {
    console.log('we have choices for you');
} else {
    'eat whatever';
}

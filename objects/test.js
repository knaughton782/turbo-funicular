let person = {
    hairColor: 'pulp riot',
    height: 65,
    nickname: 'red'
}
console.log(person);
console.log(person.height);


let nickname = person.nickname;
nickname = 'Harrison';

person.nickname = 'Harrison';
console.log(nickname);
console.log(person.nickname);

let funky = function(test) {
    console.log(test);
    return {
        hairColor: 'pulp riot',
        height: 65,
        nickname: 'red'
    }
};

console.log(funky(test.hairColor));

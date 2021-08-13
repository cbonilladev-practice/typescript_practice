"use strict";
function add(n1, n2, showResult, phrase) {
    // Vanilla JS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    // 	throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// Best practice - Declare the type first, and then assign a value. 
// let number1: number;
// number1 = 5
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Your results is: ";
//let resultPhrase = "Hello, Laverne."
//resultPhrase = 0
//>>ERROR
add(number1, number2, printResult, resultPhrase);
//Typescript Objects
// const person: {
// 	name: string,
// 	age: number,
// 	hobbies: string[],
// 	role: [number, string]
// } = {
// 	name: 'Laverne',
// 	age: 20,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author']
// }
// Pre-Enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Laverne',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//Exploring tuples, limits both type and length. 
// person.role.push('admin')
// person.role[1] = 10
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ["Eating"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
if (person.role == Role.AUTHOR) {
    console.log('is author');
}

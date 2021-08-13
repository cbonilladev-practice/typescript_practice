function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	// Vanilla JS
	// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
	// 	throw new Error('Incorrect input!');
	// }

	const result = n1 + n2;

	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

// Best practice - Declare the type first, and then assign a value. 
// let number1: number;
// number1 = 5

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Your results is: "

//let resultPhrase = "Hello, Laverne."
//resultPhrase = 0
//>>ERROR

add(number1, number2, printResult, resultPhrase)

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

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = "AUTHOR" };

const person = {
	name: 'Laverne',
	age: 20,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN
}

//Exploring tuples, limits both type and length. 
// person.role.push('admin')
// person.role[1] = 10

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Eating"]

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map())
}

if (person.role == Role.AUTHOR) {
	console.log('is author')
}
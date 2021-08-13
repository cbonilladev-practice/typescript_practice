"use strict";
//unknown is a more specific form of any.
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput >> type unknown is not assignable to type string.
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
const result = generateError("An error is here!", 500);
console.log(result);

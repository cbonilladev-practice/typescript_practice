"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//Void does not return anything, inherent value so :void here is redundant.
function printResult(num) {
    console.log('Result: ' + num);
}
//Undefined requires a return, but not a return value.
// function printResult(num: number): undefined {
// 	console.log('Result: ' + num);
// 	return;
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
//let combineValues: Function
//This is a more specific function form.
var combineValues;
combineValues = add;
//Pointer also takes any function w/o specification. >>undefined
// combineValues=printResult
//Pointer takes any value w/o Function type.
// combineValues = 5;
console.log(combineValues(9, 9));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

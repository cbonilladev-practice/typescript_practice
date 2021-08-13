function add(n1: number, n2: number) {
	return n1 + n2;
}

//Void does not return anything, inherent value so :void here is redundant.
function printResult(num: number):void {
	console.log('Result: ' + num);
}

//Undefined requires a return, but not a return value.
// function printResult(num: number): undefined {
// 	console.log('Result: ' + num);
// 	return;
// }

function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) {
	const result = n1 + n2;
	cb(result);
}

printResult(add(5, 12));

//let combineValues: Function
//This is a more specific function form.
let combineValues: (a: number, b: number) => number;

combineValues = add;
//Pointer also takes any function w/o specification. >>undefined
// combineValues=printResult
//Pointer takes any value w/o Function type.
// combineValues = 5;

console.log(combineValues(9,9));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
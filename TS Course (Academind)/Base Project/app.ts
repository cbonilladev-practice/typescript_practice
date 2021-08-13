//Literal Types switch values given tags like resultConversion. 
function combine(
	input1: number | string, 
	input2: number | string, 
	resultConversion: 'as-number' | 'as-text') {
	//Empty base result.
	let result;
	if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion == 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString()
	}
	if(resultConversion === 'as-number') {
		return +result;
	} else {
		return result.toString();
	}
}

const combinedAges = combine(22,33, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('22','33', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine("Laverne", "Shirley", 'as-text');
console.log(combinedNames);
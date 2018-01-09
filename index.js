const testNumber = require('./test').testNumber

function findIt(n) {
	let k = 0;
	let k_num = 0

	while (k<n) {
		k_num = k_num + 1
		k = k + 1/k_num
	}

	return k_num === 0 ? 1 : k_num
}

//Donnez une valeur à nombre
let number = 10

testNumber(findIt(number), number)

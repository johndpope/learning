// const square = function (x) {
// 	return (x * x);
// };

// // const squareArrow = (x) => {
// // 	return (x * x);
// // };


// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// const getFirstName = (fullName) => {
// 	return fullName.split(' ')[0];
// }

// const getFirstNameShort = (fullName) => fullName.split(' ')[0];

// console.log(getFirstNameShort('Khalil Chatoo'))


const add = function (a,b) { 
	console.log(arguments);
	return a + b;
};

console.log(add(5,1,100));

const multiplier = {
	numbers: [3,4,2],
	multiplyBy: 2,
	multiply() { 
		return this.numbers.map((num) => num * this.multiplyBy);
	}
}

console.log(multiplier.multiply());
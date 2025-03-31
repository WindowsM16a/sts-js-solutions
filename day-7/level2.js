// q1
// function solveLinEquation(a, b, c, x, y) {
// 	const eqn = a * x + b * y + c;
// 	return eqn;
// }
// console.log(solveLinEquation(2, 3, -5, 1, 2));

// q2
// function solveQuadratic(a, b, c) {
// 	// Calculate the discriminant
// 	const discriminant = Math.pow(b, 2) - 4 * a * c;

// 	// Check if the discriminant is positive, zero, or negative
// 	if (discriminant > 0) {
// 		// Two real and distinct roots
// 		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
// 		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
// 		return [root1, root2]; // Return as an array of two roots
// 	} else if (discriminant === 0) {
// 		// One real root (repeated)
// 		const root = -b / (2 * a);
// 		return [root]; // Return as an array with one root
// 	} else {
// 		// No real roots, return complex roots
// 		const realPart = -b / (2 * a);
// 		const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
// 		return [
// 			`${realPart} + ${imaginaryPart}i`,
// 			`${realPart} - ${imaginaryPart}i`,
// 		]; // Return complex roots as strings
// 	}
// }

// console.log(solveQuadratic(1, -1, 0));

// q3
// function printArray(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		console.log(array[i]);
// 	}
// }
// printArray(["a", "b", 3, true]);

// q4
// function showDateTime() {
// 	const now = new Date();
// 	return `${now.getDate()}/${
// 		now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth()
// 	}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
// }
// console.log(showDateTime());

// q5
// function swapValues(val1, val2) {
// 	return `x => ${val2}, y => ${val1}`;
// }
// console.log(swapValues(2,3));

// q6
// function reverseArray(array) {
// 	for (let i = array.length - 1; i >= 0; i--) {
// 		console.log(array[i]);
// 	}
// }
// reverseArray([1, 3, 4, 3]);

// q7
// const countries = [
// 	"albania",
// 	"bolivia",
// 	"canada",
// 	"denmark",
// 	"ethiopia",
// 	"finland",
// ];
// let capitalizedArray = [];
// function capitalizeArray(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		capitalizedArray.push(
// 			array[i][0].toUpperCase() + array[i].slice(1, array[i].length)
// 		);
// 	}
// }
// capitalizeArray(countries);
// console.log(capitalizedArray);

// q8
// const someArr = ["yellow", "banana"];
// function addItem(item) {
// 	someArr.unshift(item);
// }
// addItem("beans");
// console.log(someArr);

// q9
// function removeItem(index) {
// 	someArr.shift(index);
// }
// removeItem(1);
// console.log(someArr);

// q10
// function sumOfNumbers(number) {
// 	let total = 0;
// 	for (let i = 0; i <= number; i++) {
// 		total += i;
// 	}
// 	return total;
// }
// console.log(sumOfNumbers(5));

// q11
// function sumOfOdds(number) {
// 	let total = 0;
// 	for (let i = 0; i <= number; i++) {
// 		if (i % 2 == 1) {
// 			console.log(i);
// 			total += i;
// 		}
// 	}
// 	return total;
// }
// console.log(sumOfOdds(5));

// q12
// function sumOfEven(number) {
// 	let total = 0;
// 	for (let i = 0; i <= number; i++) {
// 		if (i % 2 == 0) {
// 			total += i;
// 		}
// 	}
// 	return total;
// }
// console.log(sumOfEven(5));

// q13
// function evensAndOdds(number) {
// 	if (number < 1) {
// 		console.log("use a positive integer greater than 0");
// 	} else {
// 		let evens = 0,
// 			odds = 0;

// 		for (let i = 0; i <= number; i++) {
// 			if (i % 2 == 0) {
// 				evens++;
// 			} else if (i % 2 == 1) {
// 				odds++;
// 			}
// 		}
// 		console.log(
// 			`The number of odds are ${odds}\nThe number of evens are ${evens}`
// 		);
// 	}
// }
// evensAndOdds(100);

// q14
// function argsSum(...args) {
// 	return args.reduce((total, current) => total + current, 0);
// }
// console.log(argsSum(1, 2, 3, 4));

// q15
// function randomUserIp() {
// 	let p1 = Math.trunc(Math.random() * 255 + 1);
// 	let p2 = Math.trunc(Math.random() * 255) + 1;
// 	let p3 = Math.trunc(Math.random() * 255) + 1;
// 	let p4 = Math.trunc(Math.random() * 255) + 1;
// 	return `${p1}.${p2}.${p3}.${p4}`;
// }
// console.log(randomUserIp());

// q16
// function randomMacAddress() {
// 	let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 	let letters = ["A", "B", "C", "D", "E", "F"];
// 	let addressPool = nums.concat(letters);
// 	console.log(addressPool);
// 	let p1 = `${addressPool[Math.trunc(Math.random() * addressPool.length - 1)]}${
// 		addressPool[Math.trunc(Math.random() * addressPool.length - 1)]
// 	}`;
// 	let p2 = `${addressPool[Math.trunc(Math.random() * addressPool.length - 1)]}${
// 		addressPool[Math.trunc(Math.random() * addressPool.length - 1)]
// 	}`;
// 	let p3 = `${addressPool[Math.trunc(Math.random() * addressPool.length - 1)]}${
// 		addressPool[Math.trunc(Math.random() * addressPool.length - 1)]
// 	}`;
// 	let p4 = `${addressPool[Math.trunc(Math.random() * addressPool.length - 1)]}${
// 		addressPool[Math.trunc(Math.random() * addressPool.length - 1)]
// 	}`;
// 	return `${p1}:${p2}:${p3}:${p4}`;
// }
// console.log(randomMacAddress());

// q17
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let letters = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F"];
// let hexPool = nums.concat(letters);
// let hexVals = "";
// function randomHexNumberGenerator() {
// 	for (i = 0; i < 6; i++) {
// 		hexVals += hexPool[Math.trunc(Math.random() * hexPool.length)];
// 	}
// 	return `#${hexVals}`;
// }
// console.log(randomHexNumberGenerator());

// // q18
// function userIdGenerator() {
// 	let userId = "";
// 	for (let i = 0; i < 7; i++) {
// 		userId += hexPool[Math.trunc(Math.random() * hexPool.length)];
// 	}
// 	return userId;
// }
// console.log(userIdGenerator());

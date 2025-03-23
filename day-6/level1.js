// q1
// for
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }

// while
// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

// q2
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// while
// let i = 10;

// while (i >= 0) {
// 	console.log(i);
// 	i--;
// }

// do while
// do {
// 	console.log(i);
// 	i--;
// } while (i >= 0);

// q3
// for (let n = 0; n <= 7; n++) {
// 	console.log(n);
// }

// for (let n = 7; n >= 0; n--) {
// 	console.log(n);
// }

// q4
// same number of hashtags as the iteration number
// let pattern = "";
// for (let i = 0; i < 7; i++) {
// 	pattern += "#";
// 	console.log(pattern);
// }

// q5
// for (let i = 0; i <= 10; i++) {
// 	console.log(`${i} * ${i} = ${i ** 2}`);
// }

// q6
// let i = 0;
// while (i <= 10) {
// 	console.log(`${i} ${i ** 2} ${i ** 3}`);
// 	i++;
// }

// q7
// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// q8
// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 == 1) {
// 		console.log(i);
// 	}
// }

// q9
// divided by 1 and itself only
const primeArr = [];
for (let i = 0; i <= 100; i++) {
	if (i == 1 || i < 1) {
		console.log(`${i} is not a prime number`);
	} else if (i == 2 || i == 3) {
		primeArr.push(i);
	} else if (i % 2 == 0 || i % 3 == 0) {
		console.log(`${i} is not a prime number`);
	} else primeArr.push(i);
}
console.log(primeArr.toString());
// q10
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
// 	{
// 		sum += i;
// 	}
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// q11
// let sumOdd = 0;
// let sumEven = 0;
// for (i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		sumEven += i;
// 	} else if (i % 2 == 1) {
// 		sumOdd += i;
// 	}
// }
// console.log(
// 	`The sum of all events from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
// );

// q12
// let sumOdd = 0;
// let sumEven = 0;
// for (i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		sumEven += i;
// 	} else if (i % 2 == 1) {
// 		sumOdd += i;
// 	}
// }
// let evenArr = [sumEven];
// let oddArr = [sumOdd];
// console.log(evenArr.concat(oddArr));

// q13
// const arr = [];
// let newValue;
// for (let i = 0; i < 5; i++) {
// 	newValue = Math.floor(Math.random() * 100);
// 	arr.push(newValue);
// }
// console.log(arr);

// q14
// const arr = [];
// let newValue;
// for (let i = 0; i < 5; i++) {
// 	newValue = Math.floor(Math.random() * 100);
// 	if (!arr.includes(newValue)) {
// 		arr.push(newValue);
// 	}
// }
// console.log(arr);

// q15
// const characters = "abcdefghijklmnopqrstuvwxyz";
// const charArr = characters.split("");
// const randomArr = [];
// let newChar;
// for (i = 0; i < 5; i++) {
// 	newChar = Math.floor(Math.random() * charArr.length);
// 	randomArr.push(charArr[newChar]);
// }
// console.log(randomArr.toString());

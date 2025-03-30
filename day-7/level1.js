const pi = 3.14;
// q1
// function fullName() {
// 	console.log("Shayne");
// }
// fullName();

// q2
// function fullName(firstName, lastName) {
// 	console.log(`${firstName} ${lastName}`);
// }
// fullName("Shayne", "Wuver");

// q3
// function addNumbers(num1, num2) {
// 	const sum = num1 + num2;
// 	return sum;
// }
// console.log(addNumbers(2, 3));

// q4
// function areaOfRectangle(length, width) {
// 	const area = length * width;
// 	return area;
// }
// console.log(areaOfRectangle(2, 3));

// q5
// function perimeterOfRectangle(length, width) {
// 	const perimeter = 2 * (length + width);
// 	return perimeter;
// }
// console.log(perimeterOfRectangle(2, 3));

// q6
// function volumeOfPrism(length, width, height) {
// 	const volume = length * width * height;
// 	return volume;
// }
// console.log(volumeOfPrism(2, 2, 2));

// q7
// function areaOfCircle(radius) {
// 	const area = pi * radius ** 2;
// 	return area;
// }
// console.log(areaOfCircle(2));

// q8
// function circumOfCircle(radius) {
// 	const circumference = 2 * pi * radius;
// 	return circumference;
// }
// console.log(circumOfCircle(2));

// q9
// function density(mass, volume) {
// 	const density = mass / volume;
// 	return density;
// }
// console.log(density(150, 4));

// q10
// function speed(distance, time) {
//     const speed = distance / time
//     return speed
// }
// console.log(speed(100,2));

// q11
// const gravity = 6.67 * 10 ** -11;
// function weight(mass) {
// 	const weight = mass * gravity;
// 	return weight / 10 ** -11;
// }
// console.log(`${weight(150)} x 10 ^ -11`);

// q12
// function convertCelsiusToFahrenheit(celsius) {
// 	const fahrenheit = (celsius * 9) / 5 + 32;
// 	return fahrenheit;
// }
// console.log(convertCelsiusToFahrenheit(100));

// q13
// function calcBMI(weight, height) {
// 	const bmi = weight / (height * height);
// 	let bmiVerdict = "";
// 	if (bmi <= 18.5) {
// 		bmiVerdict = "Underweight";
// 	} else if (bmi <= 24.9) {
// 		bmiVerdict = "Normal Weight";
// 	} else if (bmi <= 29.9) {
// 		bmiVerdict = "Overweight";
// 	} else if (bmi >= 30) {
// 		bmiVerdict = "Obese";
// 	}
// 	return `${bmiVerdict}: BMI is ${bmi}`;
// }
// console.log(calcBMI(110, 1.9));

// q14
// const months = [
// 	"january",
// 	"february",
// 	"march",
// 	"april",
// 	"may",
// 	"june",
// 	"july",
// 	"august",
// 	"september",
// 	"october",
// 	"november",
// 	"december",
// ];

// const autumn = ["september", "october", "november"],
// 	winter = ["december", "january", "february"],
// 	spring = ["march", "april", "may"],
// 	summer = ["june", "july", "august"];

// let season;
// function checkSeason(month) {
// 	if (autumn.includes(month)) {
// 		season = "autumn";
// 	} else if (winter.includes(month)) {
// 		season = "winter";
// 	} else if (spring.includes(month)) {
// 		season = "spring";
// 	} else if (summer.includes(month)) {
// 		season = "summer";
// 	} else console.log("check your input");
// 	return season;
// }

// console.log(checkSeason(months[5]));

// q15
// function findMax(num1, num2, num3) {
// 	const nums = [num1, num2, num3];
// 	nums.sort((a, b) => b - a);
// 	return nums[0];
// }
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));

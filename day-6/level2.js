// q1
// let characters = "abcdefghijklmnopqrstuvwxyz";
// const charactersArr = characters.split("");
// const randChar = [];
// console.log(charactersArr);
// for (i = 0; i < Math.trunc(Math.random() * charactersArr.length); i++) {
// 	randChar.push(
// 		charactersArr[Math.trunc(Math.random() * charactersArr.length)]
// 	);
// }
// console.log(randChar.toString());

// q2
// let finalHexNum = "#";
// let hexCharacters = "abcdef";
// let hexNums = "0123456789";
// let hexValues = hexCharacters + hexNums;
// let hexValuesArr = hexValues.split("");
// for (i = 0; i < 6; i++) {
// 	finalHexNum += hexValuesArr[Math.trunc(Math.random() * hexValues.length)];
// }
// console.log(finalHexNum);

// q3
// let r, g, b;
// while (true) {
// 	r = Math.trunc(Math.random() * 256);
// 	g = Math.trunc(Math.random() * 256);
// 	b = Math.trunc(Math.random() * 256);
// 	break;
// }
// console.log(`rgb(${r}, ${g}, ${b})`);

// q4
// const countriesUppercase = [];
// for (i = 0; i < countries.length; i++) {
// 	countriesUppercase.push(countries[i].toUpperCase());
// }
// console.log(countriesUppercase);

// q5
// const countryLengths = [];
// for (i = 0; i < countries.length; i++) {
// 	countryLengths.push(countries[i].length);
// }
// console.log(countryLengths);

// q6

// console.log(countries[1].split(""));
let countriesInfo = [];
countries.splice(9, 0, "Iceland");
for (let i = 0; i < countries.length; i++) {
	let country = [];
	country.push(countries[i]);
	country.push(country[0].slice(0, 3).toUpperCase());
	country.push(country[0].length);
	console.log(country);
	countriesInfo.push(country);
}
console.log(countriesInfo);

// q7
let landArr = [];
for (let i = 0; i < countries.length; i++) {
	let country = [];
	country.push(countries[i]);
	if (country[0].includes("land")) {
		landArr.push(country[0]);
	}
}
console.log(landArr);

// q8
let iaArr = [];
for (let i = 0; i < countries.length; i++) {
	let country = [];
	country.push(countries[i]);
	if (country[0].endsWith("ia")) {
		iaArr.push(country[0]);
	}
}
console.log(iaArr);

// q9
let maxLengthCountry = countries[0];

for (let i = 0; i < countries.length; i++) {
	if (countries[i].length > maxLengthCountry.length) {
		maxLengthCountry = countries[i];
	}
}
console.log(`The country with the most characters is ${maxLengthCountry}`);

// q10
let fiveCharArr = [];
for (let i = 0; i < countries.length; i++) {
	let country = [];
	country.push(countries[i]);
	if (countries[i].length == 5) {
		fiveCharArr.push(countries[i]);
	}
}
console.log(fiveCharArr);

// q11
let maxLengthTech = webTechs[0];
for (let i = 0; i < webTechs.length; i++) {
	if (webTechs[i].length > maxLengthTech.length) {
		maxLengthTech = webTechs[i];
	}
}
console.log(`The longest word in the webTechs array is ${maxLengthTech}`);

// q12
let allTechsArr = [];
for (let i = 0; i < webTechs.length; i++) {
	let techArr = [];
	techArr.push(webTechs[i], webTechs[i].length);
	allTechsArr.push(techArr);
}
console.log(allTechsArr);

// q13
const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = "";
for (let i = 0; i < mernStack.length; i++) {
	acronym += mernStack[i].slice(0, 1);
}
console.log(acronym);

// q14
const forArr = [
	"HTML",
	"CSS",
	"JS",
	"React",
	"Redux",
	"Node",
	"Express",
	"MongoDB",
];
for (let i = 0; i < forArr.length; i++) {
	console.log(forArr[i]);
}

// q15
const fruitsArr = ["banana", "orange", "mango", "lemon"];
for (let i = fruitsArr.length - 1; i >= 0; i--) {
	console.log(fruitsArr[i]);
}

// q16
let fullStack = [
	["HTML", "CSS", "JS", "React"],
	["Node", "Express", "MongoDB"],
];
fullStack = fullStack[0].concat(fullStack[1]);
for (i = 0; i < fullStack.length; i++) {
	console.log(fullStack[i]);
}

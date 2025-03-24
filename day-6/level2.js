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
// note: need to add a new country for 5, 6, 7; iceland
// const countryLengths = [];
// for (i = 0; i < countries.length; i++) {
// 	countryLengths.push(countries[i].length);
// }
// console.log(countryLengths);

// q6
console.log(country[1].split(""));
let countriesInfo = [];

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

for (let i = 0; i < countries.length; i++) {
	let country = [];
	country.push(countries[i]);
	if (country[0].includes("land")) {
		console.log(country);
	} else console.log("All these countries are without land");
}

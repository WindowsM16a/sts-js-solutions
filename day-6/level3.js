// q1
const countriesCopy = countries.slice(0, countries.length);
console.log(countriesCopy);

// q2
const sortedCountries = countries.slice(0, countries.length).sort();
console.log(sortedCountries);

// q3
// webTechs.sort();
// mernStack.sort();

// q4
let landArr = [];
for (let i = 0; i < countries.length; i++) {
	if (countries[i].includes("land")) {
		landArr.push(countries[i]);
	}
}
console.log(landArr);

// q5
let maxLengthCountry = countries[0];
for (let i = 0; i < countries.length; i++) {
	if (countries[i].length > maxLengthCountry.length) {
		maxLengthCountry = countries[i];
	}
}
console.log(maxLengthCountry);

// q6
landArr = [];
for (let i = 0; i < countries.length; i++) {
	if (countries[i].includes("land")) {
		landArr.push(countries[i]);
	}
}
console.log(landArr);

// q7
let fourChar = [];
for (let i = 0; i < countries.length; i++) {
	if (countries[i].length == 4) {
		fourChar.push(countries[i]);
		// console.log(fourChar);
	}
}
if (fourChar.length == 0) {
	console.log("The countries have more or less than 4 characters");
} else console.log(fourChar);

// q8
let twoPlusArr = [];
for (let i = 0; i < countries.length; i++) {
	if (countries[i].length >= 2) {
		twoPlusArr.push(countries[i]);
	}
}
console.log(twoPlusArr);

// q9
countries.reverse();
let reversedCapCountries = [];
for (let i = 0; i < countries.length; i++) {
	reversedCapCountries.push(
		countries[i].slice(0, 1).toUpperCase() +
			countries[i].slice(1, countries[countries.length])
	);
}
console.log(reversedCapCountries);

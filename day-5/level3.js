// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// const agesSorted = ages.sort();

// const minAge = ages[0];
// console.log(minAge);

// const maxAge = ages[ages.length - 1];
// console.log(maxAge);

// median
// ages.sort((a, b) => a - b);
// const agesLength = ages.length;
// const mid = Math.floor(agesLength / 2);
// let median;
// if (mid % 2 == 0) {
// 	console.log(`The median is ${(ages[mid - 1] + ages[mid]) / 2}`);
// } else if (mid % 2 == 1) {
// 	console.log(`The median is ${ages[mid]}`);
// }

// avg age
// let total = 0;
// for (let i = 0; i < ages.length; i++) {
// 	total += ages[i];
// }
// const avg = total / ages.length;
// console.log(avg);

// range
// const range = maxAge - minAge;
// console.log(range);

// console.log(Math.abs(minAge - avg).toFixed(2));
// console.log(Math.abs(maxAge - avg).toFixed(2));

// q2
// const midCountry = countries[Math.floor(countries.length / 2)];
// console.log(midCountry);

// q3
console.log(countries.length);
// uncomment the pop to check when countries array is even
// countries.pop();
let midLength = countries.length / 2;
if (countries.length % 2 == 0) {
	let firstArr = countries.slice(0, midLength);
	let secondArr = countries.slice(midLength, countries.length);
	console.log(firstArr, secondArr);
} else if (countries.length % 2 == 1) {
	let firstArr = countries.slice(0, midLength + 1);
	let secondArr = countries.slice(midLength + 1, countries.length);
	console.log(firstArr, secondArr);
}

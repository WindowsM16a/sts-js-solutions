const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const agesSorted = ages.sort();

const minAge = ages[0];
console.log(minAge);

const maxAge = ages[ages.length - 1];
console.log(maxAge);

// median

// avg age
let total = 0;
for (let i = 0; i < ages.length; i++) {
	total += ages[i];
}
const avg = total / ages.length;
console.log(avg);

// range
const range = maxAge - minAge;
console.log(range);

console.log(Math.abs(minAge - avg).toFixed(2));
console.log(Math.abs(maxAge - avg).toFixed(2));

// q2
console.log(countries.slice(0, 10));
const midCountry = countries[Math.floor(countries.length / 2)];
console.log(midCountry);

// q3
console.log(countries.length);

// q1
// const emptyArr = []

// q2
// const fiveArr = [1, 2, 3, 4, 5]

// q3
// console.log(fiveArr.length);

// q4
// const firstItem = fiveArr[0]
// console.log(firstItem);

// const middleItem = fiveArr[Math.floor(fiveArr.length / 2)]
// console.log(middleItem);

// const lastItem = fiveArr[fiveArr.length - 1]
// console.log(lastItem);

// q5
// const mixedDataTypes = [1, "cars", true, 23, ["games", "sim racing"], "boobs"];
// console.log(mixedDataTypes.length);

// q6
// const itCompanies = [
// 	"Facebook",
// 	"Google",
// 	"Microsoft",
// 	"Apple",
// 	"IBM",
// 	"Oracle",
// 	"Amazon",
// ];

// q7
// console.log(itCompanies);

// q8
// console.log(itCompanies.length);

// q9
// const firstComp = itCompanies[0];
// console.log(firstComp);

// const middleComp = itCompanies[Math.floor(itCompanies.length / 2)];
// console.log(middleComp);

// const lastComp = itCompanies[itCompanies.length - 1];
// console.log(lastComp);

// q10
// console.log(itCompanies.join(", "));

// q11
// const uppercaseItCompanies = itCompanies.map((itCompany) =>
// 	itCompany.toUpperCase()
// );
// console.log(uppercaseItCompanies);

// q12
// console.log(itCompanies.join(", "), "are big IT companies");

// q13
// if (itCompanies.includes("Facebook")) {
// 	console.log("Facebook");
// } else console.log(`Facebook not found`);

// q14
// idk how else to do it without loops so fuck it
const lessThanOneO = [];
for (let i = 0; i < countries.length; i++) {
	let count = 0;
	for (let j = 0; j < countries[i].length; j++) {
		if (countries[i][j] == "o") {
			count++;
		}
	}
	if (count <= 1) {
		lessThanOneO.push(countries[i]);
	}
}
console.log(lessThanOneO);

// q15
// const sortedItCompanies = itCompanies.sort();

// q16
// console.log(itCompanies.reverse());

// q17
// console.log(itCompanies.slice(0, 3));

// q18
// console.log(itCompanies.slice(itCompanies.length - 3, 7));

// q19
// this wasn't easy to figure out, makes me 100% there's an easier way
// console.log(
// 	itCompanies.slice(
// 		Math.floor(itCompanies.length / 2),
// 		Math.floor(itCompanies.length / 2 + 1)
// 	)
// );

// q20
// itCompanies.shift();
// console.log(itCompanies);

// q21
// itCompanies.pop();
// console.log(itCompanies);

// q22
// itCompanies.splice(0, itCompanies.length);
// console.log(itCompanies);

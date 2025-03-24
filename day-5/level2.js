// q2
let text =
	"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const noPunctText = text.replace(/[.]/g, "");
console.log(noPunctText);

const textArr = noPunctText.split(" ");

console.log(textArr);
console.log(textArr.length);

// q3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);

// note: works but not allergic to honey lol
// let honeyIndex = shoppingCart.indexOf("Honey");
// if (honeyIndex > -1) {
// 	shoppingCart.splice(honeyIndex, 1);
// }
// console.log(shoppingCart);

let teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex > -1) {
	shoppingCart.splice(teaIndex, 1, "Green Tea");
}
console.log(shoppingCart);

// q4
if (countries.includes("Ethiopia")) {
	console.log("ETHIOPIA");
} else countries.push("Ethiopia");

// q5
if (webTechs.includes("Sass")) {
	console.log("Sass is a CSS preprocessor");
} else webTechs.push("Sass");
console.log(webTechs);

// q6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

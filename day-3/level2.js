// q1
let base = parseInt(prompt('Enter base:'));
let height = parseInt(prompt('Enter height:'));
let areaTriangle = (base * height) / 2;
console.log(`The area of the triangle is ${areaTriangle}`);

// q2
let sideA = parseInt(prompt('Enter side a:'));
let sideB = parseInt(prompt('Enter side b:'));
let sideC = parseInt(prompt('Enter side c:'));
let perimeterTriangle = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeterTriangle}`);

// q3
let width = parseInt(prompt('Enter width:'));
let length = parseInt(prompt('Enter length:'));
let areaRectangle = width * length;
let perimeterRectangle = 2 * (width + length);
console.log(`The area of the rectangle is ${areaRectangle} and the perimeter is ${perimeterRectangle}`)

// q4
const pi = 3.14;
let radius = prompt('Enter radius:');
let areaCircle = pi * radius^2;
let circumferenceCircle = 2 * pi * radius;
console.log(`The area of the circle is ${areaCircle} and the circumference is ${circumferenceCircle}`);

// q5
let y = '2x - 2';



// q15
const date = new Date();
let yearDate = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minutes}`)

console.log(`${day}-${month}-${year} ${hour}:${minutes}`)

console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
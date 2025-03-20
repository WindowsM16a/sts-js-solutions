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
let y, x1, x2, y1, y2;
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4];
let m = 2
let b = -2
function findY(x){
    y = ((m * x) + b);
    return y;
}

let slopeA = m;

console.log(`the y-intercept of the line is 0, ${b}`);

console.log(`the x-intercept of the line is ${0 + m / m}, 0`);


// q6
x1 = 2;
x2 = 6;
y1 = 2;
y2 = 10;

let slopeB = (y2 - y1) / (x2 - x1);
console.log(`The slope of the line is ${slopeB}`);

// q7
console.log(slopeA == slopeB)

// q8
function findX(x){
    for (let i = 0; i < x.length; i++){
        y = ((x[i] * x[i]) + (6 * x[i]) + 9);
        if (y == 0){
            return `${x[i]} satisfies the equation`;
        } else {
            console.log(`${x[i]} does not satisfy the equation`);}
    }
}
console.log(findX(x));

// q9
let hours = parseInt(prompt('Enter hours:'));
let rate = parseInt(prompt('Enter rate:'));
let earning = hours * rate;
console.log(`Your weekly earning is ${earning}`);

// q10
let firstName = 'Shayne';
let lastName = 'Wuver';

firstName.length > 7 ? console.log('Your name is long') : console.log('Your name is short');

// q11
firstName.length > lastName.length ? console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}`) : console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}.`);

// q12
let myAge = 19;
let yourAge = 17;
myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`You are ${yourAge - myAge} years older than me.`);

// q13
let currentYear = 2025;
let birthYear = parseInt(prompt('Enter birth year:'));
let age = currentYear - birthYear;
age >= 18 ? console.log(`You are ${age}. You are old enough to drive.`) : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);

// q14
let numYears = parseInt(prompt('Enter number of years you live:'));
let days = 365;
let hoursDay = 24;
let secondsHour = 60;
let seconds = numYears * days * hoursDay * secondsHour * 60;
console.log(`You lived ${seconds} seconds`);

// q15
const date = new Date();
let yearDate = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${yearDate}-${month}-${day} ${hour}:${minutes}`)

console.log(`${day}-${month}-${yearDate} ${hour}:${minutes}`)

console.log(`${day}-${month}-${yearDate} ${hour}:${minutes}`)


// q1
const age = parseInt(prompt("Enter your age: "))

age >= 18 ? alert('You are old enough to drive') : alert(`You are left with ${18 - age} years to drive`)

// q2
const myAge = parseInt(prompt('Enter my age: '))
const yourAge = parseInt(prompt('Enter your age: '))

if (myAge > yourAge){
    console.log(`I am ${myAge - yourAge} ${myAge - yourAge > 1 ? 'years': 'year'} older than you`);
} else if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} ${yourAge - myAge > 1 ? 'years': 'year'} older than me`);
}else if (myAge == yourAge){
    console.log(`We are both ${myAge} ${myAge > 1 ? 'years': 'year'} old`);
} else console.log('prolly an input error idk bro');

// q3
    // a
const a = 4
const b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`); 
} else console.log(`${b} is greater than ${a}`);

    b
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

// q4
const num = parseInt(prompt('Enter a number: '))

if (num % 2 == 0){
    console.log(`${num} is an even number`);
} else if (num % 2 == 1){
    console.log(`${num} is an odd number`);
} else console.log('check yo input or sumn idk nigga');
// q1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// q2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// q3
let numString = "10";
let numInt = 10;
let numConvert;
// initial check
console.log(typeof numString == typeof numInt);

console.log(typeof numString);
console.log(typeof numInt);

numConvert = parseInt(numString);
// final check
console.log(typeof numConvert == typeof numInt);


// q4
let floatStr = '9.8';
let floatConvert = parseFloat(floatStr);
// initial check
console.log(floatStr == 10);

floatConvert = Math.ceil(floatConvert);
// final check
console.log(floatConvert == 10);


// q5
const strA = 'python'
const strB = 'python'
console.log(strA.includes('on'), strB.includes('on'));

// q6
const jargonSentence = 'I hope this course is not full of jargon.';

console.log(jargonSentence.includes('jargon'));

// q7
let min = 0;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// q8
min = 50;
max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// q9
min = 0;
max = 255;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// q10
let jsText = 'JavaScript';
let jsTextLength = jsText.length;
let randNum = Math.floor(Math.random() * (jsTextLength - min) + min);

console.log(jsText.charAt(randNum));

// q11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// q12
becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseSentence.indexOf('because'));
console.log(becauseSentence.substr(31, 23));
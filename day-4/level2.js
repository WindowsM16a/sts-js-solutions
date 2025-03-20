// q1
const grade = parseInt(prompt('Enter your grade: '))

if (grade >= 80 && grade <= 100) {
    console.log(`${grade} is an A`);
} else if (grade >= 70 && grade <= 79) {
    console.log(`${grade} is an B`);
} else if (grade >= 60 && grade <= 69) {
    console.log(`${grade} is an C`);
} else if (grade >= 50 && grade <= 59) {
    console.log(`${grade} is an D`);
} else if (grade >= 0 && grade <= 49) {
    console.log(`${grade} is an F`);
} else {
    console.log('nigga check yo input');
}

// q2
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

const autumn = ['september', 'october', 'november'], 
winter = ['december', 'january', 'february'], 
spring = ['march', 'april', 'may'],
summer = ['june', 'july', 'august']

const userMonth = prompt('Enter a month: ').toLowerCase()

// console.log(userMonth);

if (autumn.includes(userMonth)){
    console.log(`${userMonth} is Autumn`);
} else if (winter.includes(userMonth)){
    console.log(`${userMonth} is Winter`);
} else if (spring.includes(userMonth)){
    console.log(`${userMonth} is Spring`)
} else if (summer.includes(userMonth)){
    console.log(`${userMonth} is Summer`);
} else console.log('nigga check yo input');

// q3
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
weekends = ['saturday', 'sunday']

const userDay = prompt('Enter a day: ').toLowerCase()

if (weekdays.includes(userDay)){
    console.log(`${userDay} is a weekday`);
} else if (weekends.includes(userDay)){
    console.log(`${userDay} is a weekend`);
} else console.log('check yo input nigga');
// q1
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 

monthsThirtyDays = ['september', 'april', 'june', 'november']

const userMonth = prompt("Enter a month: ").toLowerCase()

if (monthsThirtyDays.includes(userMonth)){
    console.log(`${userMonth} has 30 days`);
} else if (userMonth == months[1]){
    console.log(`${userMonth} has 28 days or 29 during a leap year`);
} else if (months.includes(userMonth) && !monthsThirtyDays.includes(userMonth)){
    console.log(`${userMonth} has 31 days`);
} else console.log('ma guy check yo input');
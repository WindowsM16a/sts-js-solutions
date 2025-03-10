// q1
let sentenceLove = 'Love is the best thing in this world. Some fund their love and some are still looking for their love.';

console.log(sentenceLove.match(/love/g).length);

// q2
let sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentenceBecause.match(/because/g).length);

// q3
const sentenceCleanup = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log( sentenceCleanup.replace(/[%$#&@;!]/g, ''));

// q4
let sentenceSalary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salaries = sentenceSalary.match(/\d+/g);
let totalSalary = parseInt(salaries[0]) + parseInt(salaries[1]) + parseInt(salaries[2]);
console.log(totalSalary);

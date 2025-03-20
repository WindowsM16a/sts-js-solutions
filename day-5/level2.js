let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const noPunctText = text.replace(/[.]/g, '');
console.log(noPunctText);

const textArr = noPunctText.split(' ')

console.log(textArr)
console.log(textArr.length)



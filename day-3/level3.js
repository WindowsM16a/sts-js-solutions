// q1
const date = new Date();
let yearDate = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minutes}`)
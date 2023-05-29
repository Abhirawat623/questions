

const readlineSync = require("readline-sync");
const user =readlineSync.question("type your name");

let count =0;
for ( let i =0; i<user.length; i++ ){
    count++;
console.log(`the length of your name is ${count}`);}
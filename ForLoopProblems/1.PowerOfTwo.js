// 1. Print powers of a 2 until a given index
const prompt = require('prompt-sync')();
let index = Number(prompt('Enter a number : '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}
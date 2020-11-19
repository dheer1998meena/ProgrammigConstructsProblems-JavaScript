// 2. Print the nth harmonic number.
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number: '));
let harmonicNumber=0;
for(i=1;i<=number;i++)
{
    harmonicNumber+=1/i;
}
console.log(number+"th Harmonic number= "+harmonicNumber);
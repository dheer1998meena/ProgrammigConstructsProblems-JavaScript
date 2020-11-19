// 3. Find if number is prime or not.
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));
let flag=true;
if (number <= 1)
flag=false;
else 
{
    for (let i = 2; i < number; i++) 
    {
        if (number % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");
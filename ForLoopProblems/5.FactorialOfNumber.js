// 5.Factorial of a number n
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number n: '));
let fact = 1;
if (number < 0)
    console.log("Enter a positive number : ");
else 
{
    if (number == 0)
        fact = 1;
    for (let i = 2; i <= number; i++) 
    {
        fact *= i;
    }
    console.log(number + "!=" + fact);
}

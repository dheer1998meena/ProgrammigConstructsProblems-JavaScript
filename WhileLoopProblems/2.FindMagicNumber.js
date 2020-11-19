// 2. Find Magic Number.
const prompt = require('prompt-sync')();
let number = Math.floor(Math.random()*100); 
console.log("Number is : "+number);
let n=number;
let start =0;
//let end = 100;
while(number>0){
if(n>number||n<number){
while(number<n){
    end = n;
    n=((start+end)/2);
}
while(number>n){
    start = n;
    n=((start+end)/2);
}
}
else if(number==n)
{
    console.log("Found the number "+n+" !!");
    break;
}
}
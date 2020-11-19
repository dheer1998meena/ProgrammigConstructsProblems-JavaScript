// 1. Temperature conversion
const prompt = require('prompt-sync')();
let options=prompt('Enter\na-To convert fahrenheit to celcius\nb-To convert celcius to fahrenheit\n');
switch(options)
{
    case 'a':
        degF=Number(prompt('Enter temperature in degree fahrenheit: '));
        fahrenheitToCelcius(degF);
        break;
    case 'b':
        degC = Number(prompt('Enter temperature in degree celcius: '));
        celciusToFahrenheit(degC);
        break;
}
function fahrenheitToCelcius(degF)
{
    if(degF>=32 && degF<=212 )
    {
    let degC= (degF-32)*(5/9);
    console.log("Celcius: "+degC);
    }
    else
    {
        console.log("Incorrect fahrenheit value");
    }
}
function celciusToFahrenheit(degC)
{
    if(degC>=0 && degC<=100 )
    {
    let degF= (degC*9/5)+32;
    console.log("Fahrenheit: "+degF);
    }
    else
    {
        console.log("Incorrect celcius value");
    }
}
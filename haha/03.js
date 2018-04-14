//0.3) Write a function to convert celsius into fahrenheit.

var tempInCelsius = 70;
var tempInFahreheit = 50;

function toFahrenheit (deg) {
  return deg * 1.8 + 32;
}

function toCelsius (deg) {
  return (deg - 32) / 1.8;
}

console.log(tempInCelsius + " degrees Celsius = " + toFahrenheit(tempInCelsius) + " degrees Fahrenheit.");

console.log(tempInFahreheit + " degrees Fahrenheit = " + toCelsius(tempInFahreheit) + " degrees Celsius.");

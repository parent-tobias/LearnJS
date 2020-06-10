// Temperature in Kelvin stored in variable 'kelvin'
var kelvinTemp = 301;
// Temperature in Celsius stored in variable 'celsius'
var celsiusTemp = kelvinTemp - 273.15;
// Temperature in Fahrenheit stored in variable 'fahrenheit'
var fahrenheitTemp = celsiusTemp * (9/5) + 32;
// round the value of fahrenheit down and assign to 'fahrenheit'
fahrenheitTemp = Math.floor(fahrenheitTemp);
// "The temperature is 'fahrenheit' degrees Fahrenheit."
console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.')

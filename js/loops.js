// review
// evaluate conditions
// like a path
// ==, ===
// <, >
// truthy and falsey
// && ||
// if, else, else if

// challenge
// use logical operators && and || to show four different code examples for each

((5 > 3) && (10 > 2)); // true
((5 < 3) && (10 > 2)); // false
((5 > 3) && (10 < 2)); // false
((5 < 3) && (10 < 2)); // false

((5 > 3) || (10 > 2)); // true
((5 < 3) || (10 > 2)); // true
((5 > 3) || (10 < 2)); // true
((5 < 3) || (10 < 2)); // false

// challenge
// create an if, else, else if statement
// use at least one if, two else if and one else statement
// use at least one logical operator
// suggestion weather

var temperature = 74;
var rainy = true;

if (temp > 90) {   
    console.log('I am going swimming');
} else if (temp > 80) {
    console.log('Time for a tan');    
} else if ((temp > 70 && (!rainy)) {
    console.log('I am going for a walk');
} else if ((temp > 70) && (rainy)) {
    console.log('I am going to grab my umbrella');
} else {
    console.log('I am staying home!');
}
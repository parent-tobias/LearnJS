// review
// functional programming
// pillar of JavaScript
// functions are values and can be passed other functions as arguments
// higher order functions, pure functions

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];

var goOutside = {};

for var i=0; i < weather.length; i++) {
    if (weather[i] > 70) {
        goOutside.push(weather[i]);
    }
}

// practice
// filter method
// pass a function to filter method and return an array of all elements that reutn a value of true

var niceWeather = function(temp) {
    return temp > 70;
}

var goOutside = weather.filter(niceWeather)

goOutside;

// or 

var goOutside = weather.filter(function(temp) {
    return temp > 70;
})

// Challenge

var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false},
];


// 

for (var i = 0; i < forecase.length; i++) {
    if (forecase[i].sun) {
        sunnyDays.push(forecase[i]);
    }
}

// with filter method

var sunnDays = forecase.filter(function(weather) {
    return weather.sun;
});

// review 
// map
// higher order function - can receive another function as an argument
// does not delete but transform each element in a new array

// practice

var numbers = [2, 4, 6, 8, 10, 12];

var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function(mult) {
    return mult * 1;
})

// challenge
// change an array of greetings to all upper case words
// save the first word in the array to a variable

var greeting = ['hi', 'hey', 'hello', 'thanks'];

var shout = greeting.map(function(salutation) {
    return salutation.toUpperCase();
})

// challenge go to lower case

var greeting = shout.map(function(salutation) {
    return salutation.toLowerCase();
})

var hiShout = shout.shift();

// whiteboard

var numbers = [1,2,3,4];
numbers.reduce(function(acc, curr, idx, arr) {
    return acc + curr;
}, 5);

var multArr = [[0,1], [2,3], [4,5]];
multArr.reduce(function(acc,curr,idx,arr){
    return acc.concat(curr);
}, [-2,-1]);

// review reduce
// higher order function
// two arguments
// high customization

var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
    {batter: 22},
    {batter: 17},
    {batter: 16},
    {batter: 5},
];

var totalHomers = homeruns.reduce(function(a, b) {
    console.log('accumulative ', a, 'current ', b);
    return a + b.batter;
})


var numbers = [1, 2, 3, 4, 5];

numbers.reduce(function(x, y) {
    console.log(x, y);
});

// find largest number is array

numbers.reduce(function(acc, curr) {
    if (acc > curr) {
        return acc;
    } else {
        return curr;
    }    
});

// practice
// use map method on all elements of an array
// use reduce method to return single value of new array
// Challenge!
// chain method

var numbers = [1, 2, 3, 4];

var triples = numbers.map(function(number) {
    return number * 3;
}). reduce(function(a, b) {
    return a + b;
}, 0);


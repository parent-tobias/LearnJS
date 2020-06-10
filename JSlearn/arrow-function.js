// arrow function review
// shorter syntax
// anonymous functions
// no function keyword
// parenthesis required for 0 or 2 or more parameters
// parenthesis optional for 1 parameter
// concise body or block body

var func1 = function() {
    return 'Hi';
}

// challenge
// rewrite func1 in es6 arrow function syntax
// concise body
// block body

let func2 = () => 'Hi';

func2();

let func3 = () => { return 'Hi';}

func3();

// challenge
// create two arrow functions
// no parameters and two or more parameters
// choose either concise or block body

let es6name = () => 'John';

let es6mult = (x, y) => x * y;

var x = 5;

var y = 6;

// es5

var numbers = [2, 4, 6, 8];

var es5squared = numbers.map(function(n) { return n * n });

// es6

var numbers = [2, 4, 6, 8];

var es6squared = numbers.map(n => n * n);
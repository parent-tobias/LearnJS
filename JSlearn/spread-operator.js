// spread operator review
// ...
// multiple elements in arrays
// multiple arguments in functions

// practice

let names = ["Tim", "Sarah", "Alex"];

console.log(...names);

console.log(["Tim", "Sarah", "Alex");

// Challenge es5

var es5names = ["Tim", "Sarah", "Alex"];

var es5numbers = ["1", "2", "3"];

var es5rainbow = es5names.concat(es5numbers);

// Challenge es6

let es6names = ["Tim", "Sarah", "Alex"];

let es6rainbow = ["1", "2", "3", ...es6names];

// challenge
// create a function that will take 3 parameters
// pass to the function an array with 3 elements using the spread operator
// pass those arguements to a template string and return the template string

let array = ["ran", "bathroom", "quickly"];

function madLib(verb, noun, adjective) {
    return `I ${verb} to the ${noun} and ${adjective} sat down.`
}

madLib(...array);
// review this & bind
// 'this' is defined by creation context
// in objects 'this' is set to the object method is called on
// bind
// helps 'this' find context
// pass object as argument to bind method to find desired context

// practice

let person = {
    name: 'Alex'
;

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name;
};

// challenge use bind method twice to give 'this' the context of person1 and person2


namer.bind(person1)();

namer.bind(person2)();

// practice

let number = {
    x: 24,
    y: 22
}

let count = function() {
    console.log(this.x + this.y);
}

count.bind(number);

// or

let boundFunc = count.bind(number);

boundFunc();

// 46

// call method review
// calls a function with a given "this" value and arguments provided individually
// call - individual arguments
// apply - array argument 
// C(all) - arguments separated by commas
// A(apply) - argument of an array
// Syntax

// practice

var myLanguages = function(lang1, lang2, lang 3) {
    console.log('My name is ' + this.name + ' and i know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

// challenge
// create two people objects with a name property and value
// use the call method on our function
// pass person object as the first argument followed by arguments for lang1, lang2 and lang3

var person1 = {
    name: 'Tim'
}

myLanguages.call(person1, 'JavaScript', 'Ruby', 'Python');

// or

var person2 = { name: 'Sarah'};

var languages = ['English', 'Spanish', 'German'];


myLanguages.call(person2, languages[0], languages[1], languages[2]);
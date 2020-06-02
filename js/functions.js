// practice 

function goodEveningNeighbor() {
    return 'Good evening, neighbor, thanks for everything!';
}

// challenge
// rewrite both functions including a parameter and argument for name in both
// in the second function replace 'everything' with a parameter and argument naming a task

function goodMorningNeighbor(name) {
    return 'Good morning, ' + name + '!';
}

goodMorningNeighbor('Joe');

function goodEveningNeighbor(name, task) {
    return 'Good evening, ' + name + ' thanks for ' + task + '!';
}

goodEveningNeighbor('Hank', 'taking the trash to the curb');

// review
// function expressions
// anonymous expressions
// IFFEs

// practice
function knockKnock() {
    return 'Who\'s there?';
}

// challenge
// call the knockKnock function

knockKnock();

// challenge
// turn knockKnock into an anonymous function within a function expressions
// call the function

var knockKnock = function() {
    return 'Who\'s there?';
}

function () {
    return 'Who\'s there?';
}

// immediately invokved function expressions

// practice

function dogWalker(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}

dogWalker('Paul', 'Charlie');

// challenge
// create an immediately invoked function expression
// store the IIFE within a variable and call it

(function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

// returns Paul is taking charlie for a walk


var dogWalker = (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

// returns undefined

dogWalker;

// returns 

// "Paul is taking charlie for a walk"

// review function scope
// scope determined by where variable is defined
// global and local
// scope chain

// practice

function roadtrip() {
    var gallons = 12;
    var mpg = 34;
    return gallons * mpg;
}

roadTrip();
408

// challenge
// scope chain
// local scope => parent scope => grandparent scope => great grandparent scope =>
// etc... => global scope => error

var gallons = 12; 
var mpg = 34;

function roadTrip() {
    return gallons * mpg;
}

// challenge
// build a nested function
// child scope => parent scope => global scope
// run the results of the child scope

var height = 10;

function volume() {
    var width = 10;
    var length = 10;
    var volumeOfObject = function() {
        return length * width * height;
    }
    return volumeOfObject()
}
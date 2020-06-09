// Implement an algorithm to determine if a string has all unique characters

// for loop
// conditional statement
// string.indexof() 
// string.lastindexof()

// for (statement 1(initialize); statement 2(test condition); statment 3(update value)) {
    // code block
// }

// if (expression) {
    // code block
// }

// var car = 'honda civic';
// car.toUppercase(); // 'HONDA CIVIC'

// indexOf()

// var car = 'honda civic';
// car.indexOf('civic'); // 6
// car.indexOf('civil'); // -1;
// car.indexOf('i'); // 7

// lastIndexOf()
// car.lastIndexOf('i'); // 9

// pseudocode

function unique(string argument) 
    code block
        for loop (statement 1; statement 2; statement 3)
            code block
                conditional statement(do the first and last index not match?) end algorithm with false return
                    if loop finished no matches return value of true



function unique(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true;
}

unique('car') // true

// pseudocode 

declare function(parameter)
    code block
        use string method to split string into an array of words. Store to variable
            declare a variable to store the largest value as we go through our array
                create a for loop to go through our array
                    create a conditional statement comparing words in an array
                        when done iterating through array, return the largest value
                            invoke function(string argument)

function maxWord(str) {
    var words = str.split(' ');
    var biggestWord = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord) {
            biggestWord = words[i].length;
        }
    }
    return biggestWord;
}

maxWord('My favorite day is friday');

// lab 
// create algorithm to determine if two strings are a permutation of each other
// pseudocode

function isPermutation(parameter1, parameter2)
    code block
        use split sort join to compare the two strings and return the value

        is isPermutation(arg, arg2)


function isPermutation(str1, str2)
    return str1.split('').sort().join('') == str2.split('').sort().join('');

isPermutation('brand', 'dnarb');
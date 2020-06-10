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

// challenge remove odd numbers from array

function evensOnly(arr) {
    return arr.filter(function (num) {
      return num % 2 === 0;
    });
  }
  
  console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  // create algorithm to measure whether a string is a palindrome
  // pseudocode start

  function palindrome(string parameter)
    code block
        use regular expression
        and replace method to get of all 
        undersired characters for comparison
            reverse our string and return the value of whether our string 
            is equal to our reversed string
  call our function with a string argument

  // pseudocode end

  // solution

  function palindrome(str) {
      var re = /[\W_]/g;
      var lowRegStr = str.toLowerCase(). replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join('');
      return reverseStr === lowRegStr;
  }

  palindrome("A man, a plan, a canal. Panama");

  function palindrom(str) {
      str = str.replace(/\W/g, '').toLowerCase();
      return (str === str.split('').reverse().join(''));
  }

  palindrome("racecar")

  // find the sum of all numbers in a range of two numbers in an array
  // largest number may be given first

  // pseudocode 

  function sumRange([array of two elements])
    code block 
        declare and assign values to variables max, min and total
        for loop (initialize counter; test at max value; update)
            add current value in for loop to total value
call function with argument of array with two elements
  // pseudocode end

  function sumAll(arr) {
      var max = Math.max(arr[0], arr[1]);
      var min = Math.min(arr[0], arr[1]);
      var temp = 0;
      for (var i = min; i <= max; i++) {
          temp += i;
      }
      return temp;
  }

  console.log(sumAll([1, 2]));

  function addAll(array) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
  }
    return total;
  }

  addAll([1, 4]);

  // challenge  
  // solve algorithm of cutting off n elements from the head

  // pseudocode
  function(array, n elements to remove)
    code block
        apply splice method to array. Pass it the arguments of starting Point
        and n argument
    call function   

    function chopper(arr, excess) {
        arr.splice(0, excess);
        return arr;
    }

 console.log(chopper(['JLKJLKJ', 'Fjslfsl', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 2));

 // challenge name swap

 function nameSwap(str) {
    return str.split(' ').reverse(' ').join(' ');
  }
  
  console.log(nameSwap('Abraham Lincoln'));
  console.log(nameSwap('Hank Aaron'));

  // challenge remove odd number from array with modulus operator and for loops

  function evensOnly(arr){
    return arr.filter(function(value) {
      return value % 2 === 0;
    });
}

// or

    function evensOnly(arr) {
        var evenArray = [];
        for ( var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0);
            evenArray.push(arr[i]);
        }
        return evenArray;
    }

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));

// challenge reverse a string


function nameShuffle(str) {
    return str.split(' ').reverse().join(' ');
  }


console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));

// or

function nameShuffle(str) {
    var backwardName = [];
    str = str.split(' ');
    backwardName.push(str[1], str[0]);    
    return backwardName.join(' ');
}

console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));

// or

function nameShuffle(str) {
    str = str.split(' ');
    var backwardName = [];
    for (var i = 1; i >= 0; i--) {
        backwardName.push(str[i]);
    }
    return backwardName.join(' ');
}

console.log(nameShuffle("John Smith"));
console.log(nameShuffle("Albert Einstein"));

// or

// reverse a string part 2 use spread method

function revString(str) {
    return [...str].reverse().join('');
}

console.log(revString('car'));
console.log(revString('bar'));

// reverse a string part 3 use a for loop

function revString(str) {
    var reverseString = '';
    for (var i = str.length - 1; i >= 0; i--) { 
      reverseString += str[i];
    }
    return reverseString;
}

console.log(revString('car'));
console.log(revString('bar'));

// find-longest-string


function longestWordLength (string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
      if (longest < str[i].length) {
        longest = str[i].length;
        word = str[i];
      }
    }
   return word;
 }
 
 console.log(longestWordLength('Hi, where is the airport?'));
 console.log(longestWordLength('Thanks for stopping by!'));

 // or
 
 function longestWordLength (str) {
    var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
    var longestWord = '';
    var wordArray = stringWithoutSpecialCharacters.split(' ');
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
        }
    }
    return longestWord.length;
 }

 console.log(longestWordLength('Hi, where is the airport?'));
 console.log(longestWordLength('Thanks for stopping by!'));
 
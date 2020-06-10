// challenge
// create identical set of code and show "var" does not take advantage of block scope but "let" does

var count = 4;

if (true) {
    var more = 1;
}

console.log(count + more);

var count = 4;

if (true) {
    let more = 1;
}

console.log(count + more);

// challenge
// var vs. let
// talk line by line
// type out yourself

function varTest() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

letTest();
2
2

function varTest() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }
    console.log(x)
}

letTest();
2
1

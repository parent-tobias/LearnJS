// challenge
// create switch statement with evaluation value between 1 - 6
// have code block for each possible match to run
// end with default code block
// expression (1-6) can be hard coded by you or you can create method for random number

var dice = 6;

 switch(dice) {
    case 1: 
        alert('Terrible roll!');
        break;
    case 2:
        alert('Bad roll');
        break;
    case 3:
        alert('Could do better');
        break;
    case 4:
        alert('Could do better');
        break;
    case 5:
        alert('Good roll');
        break;
    case 6:
        alert('Great roll');
        break;
    default:
        alert('Did you forget to roll?');
        break;
 }


Math.floor(Math.random() * 7);

// challenge
// create an array number values
// loop through that array with a for loop
// run each element of the array through an if, else, else if clause like in last lab with at least two else if options.


var battingAverage = [333, 327, 267, 294, 303, 310, 255, 242, 217];

for (i = 0; i < battingAverage.length; i++) {
    if (battingAverage[i] > 300) {
        console.log('Here is a million dollar bonus');
    } else if (battingAverage[i] > 280) {
        console.log('Here is a half million dollar bonus');
    } else if (battingAverage[i] > 250) {
        console.log('Try harder');
    } else {
        console.log('You\'re cut');
    }
}


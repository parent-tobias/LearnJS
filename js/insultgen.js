var randomBodyParts = ['head', 'arms', 'legs', 'feet', 'toes', 'hips'];

var randomAdjectives = ['Bitter', 'Bland', 'Sour', 'Greasy'];

var randomWords = ['Waggish', 'Kettle', 'Dashing', 'Nasty'];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

var randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord)


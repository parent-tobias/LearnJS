// challenge
// build a person with object literal notation
// use three property values consisting of a string, number and boolean

var humanBeing = {
    hungry: true,
    age: 25,
    height: '5\'10'
};

// challenge
// build an object with object literal notation
// use dot notation to add four properties and values

var pizza = {};

Object.property = value;

pizza.crust = 'wheat';

pizza.sauce = 'mozzarella';

pizza.toppings = 'cheese, pepperoni, olives, mushrooms';

//challenge
// add properties and values to an object with brack notation
// use a boolean, string and number

var cup = {};

object['property'] = value;

cup['insulated'] = true;

cup['liquid'] = 'water';

cup['oz'] = 16;

// practice

var snowman = {
    isSnow: true,
    color: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
};

// challenge
// access all the properties of object snowman. Start with dot notation

snowman.isSnow;
snowman.color: 
snowman.madeOfSnowballs;

// Change property values

snowman.isSnow = 'yes';
snowman.color = 'orange';
snowman.madeOfSnowballs = 8;
snowman;
snowman['first name'] = 'Jack Frost';

//challenge
// build a house object
// add 4 property values with dot notation with at least one value type of string, number and boolean
// add 3 property values with brack notation with 3 property names that can only be added with bracket notation rather than dot notation


var house = {};

house.doors = 4;
house.bedrooms = 3;
house.address = '4219 S. Othello Street';
house.office = false;
house;
house['swimming pool'] = false;
house['1stOwner'] = 'Johm Doe';
house['typeof'] = 'apartment';
house;

// practice

var home = {
    rooms: 4,
    apartment: false,
    color: 'brown',
    swimmingPool: true,
    state: 'WA',
    city: 'Seattle'
};

var home2 = {
    rooms: 2,
    apartment: false,
    color: 'brown',
    swimmingPool: true,
    state: 'CA',
    city: 'Sacramento'
};

function Home(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
};

var home1 = new Home(3, false, 'blue', true, 'Atlanta', 'GA');

// challenge
// build 3 more homes

var home2 = new Home(2, true, 'brown', true, 'Cincinnati' 'OH');

var home3 = new Home(3, false, 'red', true, 'Cleveland', 'OH');

var home4 = new Home(4, false, 'blue', false, 'Miami', 'FL');

// challenge
// create book with object literal notation
// create library with object constructor function
// create 5 instance of book

var book = {
    author: 'Victor Hugo',
    title: 'Les Miserables',
    pages: 1200
};

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
};

var book1 = new Book('Charles Dickenson', 'Tale of Two Cities', 567);

var book2 = new Book('Definitive JavaScript', 'David Flanigan', 857);

var book3 = new Book('Frankenstein', 'Mary Shelley', 454);

// JS Array Syntax

// practice

var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];

// challenge
// add a value to the end of the array
// turn 'Giants' into a different team
// access the 'Dodgers' value and save it to variable myFavoriteTeam
// access the length of the array

baseballTeams[5] = 'Cardinals';

baseballTeams[6] = 'Blue Jays';

//outcome

var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros', 'Cardinals', 'Blue Jays'];

// Challenge change Giants

baseballTeams[1] = 'Angels'

baseballTeams[2] = 'Phillies';

baseballTeams[0];

var myFavoriteTeam = baseballTeams[0];

var californiaBaseball = baseballTeams[1];

// array methods review
// push() pop() shift() unshift()

// practice

var shoppingList = ['apples', 'piiza', 'chicken', 'mushrooms', 'oranges', 'beef'];

// challenge
// insert 'crackers' at the front of the array and 'grapes' at the end of the array

shoppingList.unshift('crackers')
shoppingList.push('grapes')

["crackers", "apples", "piiza", "chicken", "mushrooms", "oranges", "beef", "grapes"]

shoppingList.push('siracha', 'popcorn');

shoppingList.unshift('lemonade', 'orange juice');

// challenge
// remove an item from the front and the end of the shopping list array

var shoppingList = ["lemonade", "orange juice", "crackers", "apples", "piiza", "chicken", "mushrooms", "oranges", "beef", "grapes", "siracha", "popcorn"]

shoppingList.pop();
shoppingList.shift();


var firstItemSarah = shoppingList.shift();

var lastItemPhil = shoppingList.pop();

["crackers", "apples", "piiza", "chicken", "mushrooms", "oranges", "beef", "grapes"]

// review array methods
// concat method - join two or more arrays
// reverse method - reverse order of elements
// sort method - sort alpha numeric
// slice method -returns but does not delete a section

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// challenge
// build another array and add the two together

var colors2 = ['black', 'white', 'brown', 'purple'];

var allColors = colors.concat(colors2);

// challenge
// add another array and use the concat method in two ways to add them together

var colors3 = ['red', 'white', 'blue'];

var moreAllColors = colors.concat(colors2, colors3);

// challenge
// reverse all the elements in the allColors array
// sort all the elements in the allColors array by alphabetical order

var reverseColors = allColors.reverse();

var alphabetColors = allColors.sort();

// challenge
// create var winter and fill with winter values
// create var summer and fill with summer values
var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

var winter = weather.slice(0, 5);

var summer = weather(5);

// challenge
// create same variables using negative numbers

var winter = weather.slice(-8, -3);

var summer = weather.slice(-3,);


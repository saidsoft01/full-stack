// (37)-------HOW TO USE JS RETURN-------------

// function test() {
//     return 'Hello'
//     return 'GM'
// }
// console.log(test())

// let login = function(password) {
//     if(password === "test123") {
//         return `Successfully logged in`;
//     } else {
//         return `Password incorrect, pls try again`
//     }
// }

// console.log(login('test123'))

// --- CLASS WORK

// function favNum(num) {
//     return `My fav number is ${num}`
// }
// let result = favNum(3)
// console.log(result)

// function password(a) {
//     if(a.length > 8) {
//     return console.log(`you chose ${a}`)
//     } else {
//         return console.log('not enough letters')
//     }
// }

// password('PurplrRhino123')
// password('Circle77')

// (38)-------HOW TO USE VAR, LET & CONST-------------
// ---CLASS WORK---
// const year = new Date();
// let currentYear = year.getFullYear()
// let currentDay = year.getDay()
// let date = `${currentDay} ${currentYear}`
// console.log(date)

// (38)-------UNDERSTANDING JS SCOPE-------------
//Scope refers to where a variable is declared and from where it can be accessed

// let x = 10;     // global scope
// console.log(x)

// if(true) {
//     let x = 25;   // local scope
//     console.log(x)
// }

// function y() {
//     let y = 15;
//     console.log(y)
// }
// y()

// console.log(x)

// LOCAL SCOPE
// It can only be used locally from where it is defined

// function a() {
//     let game = 'Sonic';
//     console.log(game)
// }

// a()

// if(true) {
//     let game = 'Mario';
//     console.log(game)
// }

//GLOBAL SCOPE

// let game = 'sonic'
// console.log(game)

// function title() {
//     return console.log(`${game}`)
// }
// title()

// if(true) {
//  console.log(`${game}`)
// }

//----CLASS WORK-------

// let firstName = "Ola";
// firstName = 'James'
// let lastName = "Ahmed";
// let age = 41;

// function myData() {
//   let firstName = "Ola";
//   let lastName = "Ahmed";
//   let age = 41;
//   let country = "Nigeria";
//   console.log(`${firstName} ${lastName} is ${age} years old ad lives in ${country}`);
// }

// let   firstName = "James";
// myData();

// (40)-------UNDERSTANDING JS HOISTING-------------

// Hoisting is JS default behaviour where variables and function
//declarations are moved to the top of their scope before code execution 

// hello();

// function hello() {
//     console.log('Hello')
// }

// (41)-------THIS KEYWORD-------------
//It's associated with object oriented programming

// 4 Way THIS can be defined

//1. the global object
// console.log(this)
// window.console.log(this)
// this.console.log(this)
// using THIS in a normal function
// function thisKeyWord() {
//     console.log(this)
// }
// thisKeyWord()

//2. as a method within an object & //3. as a constructor on a function or class
// let game = {
//     name: 'Sonic',
//     platform:'Sega',
//     year: 1991,
//     characters: {
//         main: 'America',
//         side: 'West',
//         enemy: 'Iran',
//         list() {
//             console.log(`${this.main}, ${this.side}, ${this.enemy}`)
//         }
//     },

//         release: function () {
//         console.log(`game was released in ${this.year}`)
//     }
// };
// game.release()
// game.characters.list()

//4. as a DOM even handler
// When you use THIS keyword inside a DOM event handler, it refers to the 
// targeted element
// const btn = document.querySelector('button');
// btn.textContent = 'Click me'

// btn.addEventListener('click', function() {
//     console.log(this) // the button element will be targeted
//})

// CLASS WORK
// book = {
//     title: 'The gods are not to blame',
//     author: 'Chinua Achebe',
//     info() {
//         console.log(`${this.title} is written by ${this.author}`)
//     },
// }
// book.info()

// (42)------CALL, APPLY AND BIND METHODS-------------
// call is one time usage
// const game = {
//     title: "Sonic",
//     year: 1991,
// };

// function info(platform, character) {
//     console.log(`${this.title} was released in ${this.year} for ${platform}, it features ${character} ` )
// }

// info()
// info.call(game, "Sega", "The Hedgehog")

// for Apply, you pass the argument as an array
// apply is one time usage
// info.apply(game, ["X Box", "Mario"])

//Bind can be used multiple times by using the variable created as the function
// const gameInfo = info.bind(game, 'Ola', 'Ahmed')
// gameInfo()

//---CLASS WORK

// book = {
// title: 'Football',
// author: 'FIFA',
// };
// function info(year) {
//     console.log(`${this.title} was written by ${this.author} and was released in ${year}`)
// }

// info.call(book, "2013")
// info.apply(book, ['1999'])

// const bookie = info.bind(book, '2000');
// bookie()

// (43)-------DESTRUCTURING-------------
// it is a syntax that allows us to assign object property or array items
// as variables

// const game = {
//     title: 'Donkey Kong Country',
//     platform: 'SEGA',
//     year: 1994,
//     characters: {
//         main: 'Donkey Kong',
//         side: 'Diddy Kong',
//         boss: 'King Kong',
//     }
// };

//the example below is too ambigous
// let title = game.title;
// let platform = game.platform;
// let year = game.year;

// object destructuring will tidy it up. it does not mutate or change the original object
// let {
//     title, 
//     platform, 
//     year: release,
//     characters,
//     characters: {main, side, boss}, //main, side, boss are now variables lie the rest
//    } = game  //to give year a new variable name, release


// console.log(title, platform, year) // remove year and input release as the new variable
// console.log(main, side, boss)
// console.log(characters)


// let {length} = 'Dev Dreamer';
// console.log(length)

// Array Destructuring

// const book = [
//     'The Last Battle', 'C.S. Lewis', '1956',
//     ['Shift', 'Puzzle', 'Tirian'],
// ];
// console.log(book[0]);

// let [title, author, year, [a, b, c]] = book;
// console.log(title)
// console.log(author)
// console.log(year)
// console.log(a, b, c)

//----CLASS WORK----

// const user = {
//     firstName: 'Ola',
//     country: 'Nigeria',
//     todos: {
//         task1: 'Do the shopping',
//         task2: 'Play some games'
//     },
// }

// let {firstName, country, todos, todos: {task1, task2}} = user;
// console.log(task1, task2)

// (44)-------SPREAD OPERATOR-------------

// This allows objects and iterables to be unpacked (or spread out) into individual values.
// We can write the spread operatorr with three dots and it can be used in three different ways
// 1. Arrays
// 2. Objects
// 3. Functions 

//Arrays
// let nums = [1, 2, 3];
// let myArray = [100,...nums, 19, 67, 90];
// console.log(myArray)

// Objects
// const book = {
//     title: 'The lion the witch and the wardrobe',
//     release: '16-Nov-1950',
//     author: 'C.S. Lewis',
//     relatedBooks: {
//     title1: 'The Magician',
//     title2: 'Prince Caspian',
//     title3: 'The Silver Chair',
//     },
// };

// const updatedBook = {
//     ...book,
//     characters: 'Peter, SUsan, Edmond, Lucy',
// };

//  const relatedBooks = {
//     ...book.relatedBooks,
//     title4: 'The Horse and his boy',
//  }


// console.log(book)
// console.log(updatedBook)
// console.log(relatedBooks)

//funtion
// function sum(a, b, c) {
//     return console.log(a + b +c)
// }
// const num = [1, 2, 3];
// sum(...num)

//----CLASS WORK----
// let color = ['red', 'green', 'blue'];
// let newColor = ['lilac', ...color, 'yellow'];
// console.log(newColor)
// let remColor = color.pop()
// console.log(remColor)
// console.log(color)

// const user = {
//     name: 'Ola',
//     age: 41,
//     occupation: {
//     role: 'Recovery Officer',
//     }
// }

// const updatedUser = {
//     ...user,
//     occupation: {
//         ...user.occupation,
//         employer: 'Google',
//     }
// }

// console.log(updatedUser)

// const movie = ['Jumanji', 1995];

// function movieInfo(title, year) {
//     return console.log(`${title}, was relesed in the year ${year}`)
// }

// movieInfo(...movie)

// (45)-------REST PARAMETER-------------

//This bundles an argument together into an array

// function sum(a, b, c) {
//     return (a + b + c)
// }

// console.log(sum(4, 5, 6, 7, 8, 9, 10))

// function restParameter(...z) {
//     console.log(z)  // Array is created by the rest parameter above
//     console.log(...z) // convert it to a spread 
// }

// restParameter('apple', 'ball', 'cat', 'dpog', 'elephant')

// function restParameter(x, y, ...z) {
//     console.log(`the value of x is ${x}`);
//     console.log(`the value of y is ${y}`);
//     console.log(z)  // Array is created by the rest parameter above
//     console.log(...z) // convert it to a spread 

// }

// restParameter('apple', 'ball', 'cat', 'dog', 'elephant')

// const colours = function (...colours) {
//     console.log(colours[1]);
// };

// colours('red', 'green', 'yellow', 'blue');

// function heroes(a, b, ...c) {
//     console.log(c);
//     console.log(c[2]);
// }

// heroes('supermn', 'batmn', 'the hulk', 'iron man', 'wolverine')

// function heroes(...c) {
//     console.log(...c);
   
// }

// heroes('supermn', 'batmn', 'the hulk', 'iron man', 'wolverine')

// (46)-------ARROW FUNCTION-------------------

// they provide a shorter way to write anonymous function expression
// they must be assigned to a variable

// const sum = function(a, b) {
//     return console.log(a + b);
// }
// sum(5, 5)

// Arrow Function

// const sum2 = (a, b) => {
//     return console.log(a + b);
// }
// sum2(5, 5)

// const name = fName => {    // using only one parameter, might not use a bracket
//     return console.log(`Hey, ${fName}`);
// }
// name('Ola')

// Single line expressions uses return authomatically

// const game = () => console.log('Sonic');
// game()

// let game = {
//     title: 'Sonic',
//     year: 1991,
//     platform: 'SEGA',
//     regularFunction() {
//         console.log(`the game is called ${this.title}`)
//     },
//     arrowFunction: () => {
//         console.log(`the game is called ${this.title}`)
//     },
// }
// game.regularFunction();
// game.arrowFunction();  // don't use arrow function in objects unless in an array

// let game = {
//     title: 'Sonic the Hedgehod',
//     related: ['sonic 2', 'sonic 3', 'sonic & knuckles'],
//     year: 1993,
//     platform: 'Sega',
//     console: 'sega mega drive',
//     showRelated: function() {
//         this.related.forEach((relatedGame) => {
//             console.log(`Related game of ${this.title} - ${relatedGame}`)
//         });
//     }
// };
// game.showRelated();

// (47)-------USING SET TIMEOUT() & SET INTERVAL()-------------------

//setTimeout() method allows us to invoke a function once after a set period of time

//setTimeout(function, time in  milliseconds)
//setTimeout(function sub() {console.log('subscribe'), 5000})
// setTimeout(function sub(channel) {
//     console.log(`subscribe to ${channel}`)}, 5000, 'Dev Dreamer')

    // function sub(channel) {
    //     console.log(`subscribe to ${channel}`)
    // }

    // setTimeout(sub, 5000, 'Dev Dreamer')

    //clearTimeout() method will clear or abort setTimeout() method
   
    // function sub(channel) {
    //         console.log(`subscribe to ${channel}`)
    //     }    
    // let timer = setTimeout(sub, 5000, 'Dev Dreamer');
    // clearTimeout(timer);

// setInterval() method will repeat the function over and over again
// for a specified amount of time

// function sub(channel) {
//     console.log(`subscribe to my ${channel}`)
// }
// setInterval(sub, 3000, 'Dev Dreamer')

// clearInterval() method will stop the setInterval() from running
//timer = setInterval(sub, 1000, 'Dev Dreamer);
//clearInterval(timer);

//-----CLASS WORK

// function count(start, end) {
//     let timer = setInterval(() => {
//         console.log(start);
//         if(start >= end) {
//             clearInterval(timer)
//         } else {
//             start ++
//         }
//     }, 1000)
// }

// count(0, 10)
// function count(start, end) {
//     function sub(){
//         console.log(start);
//         if (start >= end) {
//             clearInterval(timer)
//     }
//      else {
//         start++
//     }
// }
// let timer = setInterval(sub, 1000)
// }
// count(1, 10)

// (48)-------HIGHER ORDER FUNCTION-------------------
// they are functions that receive a function as an argument or return
// the function as an output

// const double = n => n * 2;
// let nums = [1, 2, 3, 4, 5];
// let result = nums.map(double);
// console.log(result);
// console.log(...result);

// (49)-------PURE FUNCTION-------------------

// Pure function is a function that for some given arguments always
//produces the same outcome and one that has no side effects
//(when a function changes something outside of itself)

// const sum = (n1, n2) => console.log(n1 + n2)
// sum(2, 5);
// sum(100, 47);

//impure function
// const randomNum = (num) => console.log(num + Math.random());
// randomNum(5) // the number keeps changes

// let initResult = 0;
// console.log(`before the function = ${initResult}`);

// const addNums = (n1, n2) => {
//     const sum = n1 + n2;
//     initResult = sum // impure function

//     return sum;
// };

// console.log(addNums(5, 5));
// console.log(`after function = ${initResult}`)

// (50)-------JS RECURSION-------------------

// const countDown = (num) => {
//     for(let i = num; i >= 0; i--) {
//         console.log(i)
//     }
// }
// countDown(7)

// const countDown = (num) => {
//     console.log(num);  // log the number
//     const updatedNum = num - 1    // minus by 1
//     if (updatedNum >= 0) {        // the base case
//         countDown(updatedNum)
//     }
// };
// countDown(7)

//----CLASS WORK
// const count = (num) => {
//     console.log(num);
// const updatedNum = num + 1;
// if(updatedNum <= 10) {
//     count(updatedNum)
// }
// }
// count(1)

// (51)-------JS CLOSURES-------------------
//closures are functions that are bundled together with the lexical environment within which 
// that function was declared


// Lexical Environment
//1. environmental record
//2. a reference to the outer lexical environment

// let federal = 'Federal Govt';       // federal lexical environment

// const state = () => {              // state lexical environment
//     let localGov = 'LGA';
//     console.log(federal, localGov)
// }
// state()
// console.log(federal)

// const outer = () => {
//     let outerVar = 'outer';
//     console.log(outerVar);

//     function inner() {       // this inner is a closure because it contains a reference to it's outer lexical environment
//         let innerVar = 'inner'
//         console.log(outerVar, innerVar)
//     }
//     inner()
// }
//  outer()

// CLOSURE EXAMPLE

// const outer = () => {
//     let outerVar = 'outer';
//     console.log(outerVar);

//     function inner() {       // this inner function is a closure because it contains a reference to it's outer lexical environment
//         console.log(`inner function - ${outerVar}`)
//     }
//     return inner
// }
// outer()

// let myFunc = outer();
// console.log(myFunc)
// myFunc()

// CLASS WORK

// let crust = 'Crust';

// const earth = () => {
//     let mantle = 'Mantle';

//     function message() {      // this message function is a closure because it contains a reference to it's outer lexical environment
//         let core = 'Core';
//         console.log(`the earth is made up of ${crust}, the ${mantle} and the ${core}`)
//     }
//     return message
// }

// let funMsg = earth();
// funMsg()


//let mph = 0;
//while (mph <= 100){
// console.log(`The speed of the car is ${mph}MPH`);
// mph+= 10;
//}

//let a = 1;
//let b = 10;

//do{
//  console.log(a);
//  a++;
//}
//while (a <= b)

// (27)--------FOR IN LOOP--------------------------------------

// use variable to loop an object property and value

// for (variable in object) {
//   console.log(`${variable})
// }
//let character = {
//  name: "Mario",
//  color: "brown",
//  speed: 100,
//}

//for (let x in character) {
//console.log(`${x}: ${character[x]}`)
//}

//const salaries = {
// Ola: 84000,
// James: 34000,
// Jonh: 55000,
//}

//for (let x in salaries) {
//  console.log(`${x} earns $${salaries[x]} per year`);
//}

//const house = {
//  type: 'detached',
//  build: 'brick',
//  year: 2019,
//  price: 25000,
//  driveway: true,
//  }
//  for (let x in house) {
//    console.log(`${x}: ${house[x]}`)
//  }

// (28)--------FOR OF LOOP--------------------------------------

// used to loop over iterable structures like Arrays, strings, maps etc

//let characters = ['Mario', 'Tails', 'Sonic', 'Luigi', 'Link'];

//for (let x of characters) {
// if (x === 'Luigi') {
//   break;
//  } else {

//    console.log(x)
//  }
//}

//let course = "JavaScript";
//for (x of course) {
// console.log(x)
//}

//let time = new Date();
//.log(time)

// (29)--------ARRAYS--------------------------------------

// It's a container used to hold multiple values together

// let superHero = ['superman', 'batman', 'flash', 'spiderman', 1, 'hello', true,
//  false, ['good', 'evil', 'neutral']]
//  console.log(superHero.flat())
//  superHero[4] = 'wonder woman'
// delete superHero[2]
// superHero[0] = 'Hulk'
// console.log(superHero[8][2])

// (30)--------ARRAYS METHODS--------------------------------------

//  let superHero = ['superman', 'batman', 'flash', 'spiderman'];
// let superHero2 = ['paw patrol', 'cindarella', 'wonder woman'];
// let fam = "Kemi, Ola, Olly, Dunni"
// let famArray = fam.split(',')

// console.log(famArray)
// console.log(famArray.splice(1, 1, 'Taiye'))
// console.log(famArray)

// let superHeroCopy = [...superHero];
//  let num = [1, 2, 3, 4, 5, 6];
// let post = [
//          {title: 'post 1', author: 'Dan' },
//          {title: 'post 2', author: 'Dan' },
//          {title: 'post 3', author: 'Sarah' },
// ];

//let stock = [
//  {item: 'ketchup', quantity: 32},
//  {item: 'mayo', quantity: 9},
//  {item: 'hot sauce', quantity: 12},
// ];

//console.log(superHero.sort());
//console.log(superHero)

//let mayo = stock.find((n) => n.item === 'mayo');
//let mayo = stock.findIndex((n) => n.item === 'mayo');
//console.log(mayo)

//let isGreatertThan5 = num.some(n => n > 5)
//let allGreaterThan1 = num.every(n => n > 1)
//console.log(allGreaterThan1)
//let total = num.reduce((total, currentVal) => total + currentVal);
//let total1 = num.reduce((total, currentVal) => total + currentVal, 10);

// console.log(total1)
//console.log(post.filter((n) => n.author === 'Dan'))
//console.log(superHero.length)
//console.log(superHero[superHero.length - 1])
//console.log(superHero.length)
//console.log(superHero.indexOf('flash'))
// console.log(superHero.indexOf('hulk'))
//console.log(superHero.includes('batman')) it's case sensitive
//console.log(superHero.pop()) remove last value
//  console.log(superHero.shift()) remove first value
//console.log(superHero.push('hulk')) add value at the end of the array
//console.log(superHero.unshift('cat woman')) add value at the beginning of the array
//  console.log(superHero.toString()) change to string
// console.log(superHero.join(' and ')) to join strings, characters etc
// console.log(superHero.concat(superHero2)) join 2 or more Arrays together
// console.log(superHeroCopy.splice(1,1)) remove an element from the Array
//console.log(superHeroCopy.splice(1, 2, 'bill', 'bob'));
//console.log(superHeroCopy.slice(1, 3))
//let x = 0;
//superHero.forEach((n) => {
//  console.log(superHero[x])
//  x++;
//})
//console.log(num.map((n) => n + 10 ))

// let fruit = ['apple', 'orange', 'banana'];
// fruit.push('cherry', 'pineapple');
// fruit.unshift('plum', 'grapes')
// fruit.splice(3, 1, 'lemon')
// fruit.sort()
// console.log(fruit);

//----------- Higher Order Array Method-------------------

// array = [100, 300, 20, 18, 27];

// array.forEach(element => {
//   console.log(element * 2)
// });
// element can be any alphabet

// array.forEach(i => {
//   if (i >= 100) {
//     console.log(i / 2);
//   }
//   else {
//     console.log(i * 2);
//   }
// })

// creats a new Array
// mapArray = array.map((n) => n * 100);
// console.log(mapArray)

//----------------DESTRUCTURING----(IN CLASS)---------------
//Getting the values of the arrays as variables

// let myArray = [0, 'yes', 1, 2, 3];
// let [a, b, c, d, e] = myArray;
// console.log(b)

//---REST OPERATOR (...variable name)  GIVES A REW ARRAY
// let [a, b,...rest] = myArray;
// console.log(rest)
// console.log(rest[2])

//---SPREAD OPERATOR (...array name) will push all the values of the array only
// console.log(...myArray)
// let newArray = ['ola', true, 10, ...myArray];
// console.log(newArray)

//--- SET DEFAULT VALUES
// let input1 = prompt("enter a number");
// let input2 = prompt("enter a word");
// myArray = [];

// if(input1.length <= 0) {
//   console.log("no input 1");
// }
// else {
//   myArray.push(input1);
// }

// if(input2.length <= 0) {
//   console.log("no input 2");
// }
// else {
//   myArray.push(input2);
// }

// console.log(myArray)

// let [a = 1, b = 2] = myArray;
// console.log(a);
// console.log(b);

//--NESTED DESTRUCTURING

// let array = ['a', 'b', 'c', [1, 2, 3], true, null];

// let [a, b, c, [d, e, f], ...rest] = array;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(rest)

// let tasks = [];

// function runTasksApp() {
//   let operation = Number(
//     prompt(
//       "What would you like to do? 1. Add task 2. Remove Task 3. Review Task"
//     )
//   );
//   if (operation == 1) {
//     let userInput = prompt("Add your task");
//     if (userInput.length >= 0) {
//       tasks.push(userInput);
//       alert(tasks);
//     } else {
//       alert("please input a task");
//     }
//   } else if (operation == 2) {
//     let userInput = prompt(`${tasks} : please select the task to remove`);
//     for(i = 0; tasks[i] === userInput; i++) {
//       console.log(tasks[i]);
//       tasks.splice(i, 1);
//       alert(tasks);
//     }
//   } else if (operation == 3) {
//     alert(tasks);
//   } else {
//     alert("wrong input");
//   }
//   console.log(tasks);
// }

// let tasks = [];

// function runTasksApp() {
//   let operation = Number(
//     prompt(
//       "What would you like to do? 1. Add task 2. Remove Task 3. Review Tasks"
//     )
//   );

//   if (operation === 1) {
//     let userInput = prompt("Add your task").trim();
//     if (userInput.length > 0) {
//       tasks.push(userInput);
//       alert(`Tasks: \n${tasks.join('\n')}`);
//     } else {
//       alert("Please input a valid task.");
//     }
//   } else if (operation === 2) {
//     if (tasks.length === 0) {
//       alert("No tasks to remove.");
//       return;
//     }

//     let taskList = tasks
//       .map((task, index) => `${index + 1}. ${task}`)
//       .join('\n');
//     let taskIndex = Number(
//       prompt(`Tasks:\n${taskList}\nPlease enter the task number to remove:`)
//     );

//     if (taskIndex > 0 && taskIndex <= tasks.length) {
//       tasks.splice(taskIndex - 1, 1);
//       alert(`Task removed. Updated tasks:\n${tasks.join('\n')}`);
//     } else {
//       alert("Invalid task number.");
//     }
//   } else if (operation === 3) {
//     alert(tasks.length > 0 ? `Tasks:\n${tasks.join('\n')}` : "No tasks available.");
//   } else {
//     alert("Wrong input.");
//   }
//   console.log(tasks);
// }

// (31)--------ARRAYS ITERATOR METHODS--------------------------------------
//-----forEach() Method
// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman', 'Thor', 'Spider-Man',
//     'Wolverine', 'Cyclops', 'Professor X'];

// let numbers = [1, 2, 3, 50, 45, 12, 77, 34, 76, 90, 13, 100];    
//const fruits = ['apple', 'orange', 'banana']
    // console.log(supers)
    // supers.forEach(function (value, index, array) {
    //     console.log(`${index} ${value}`)
    //     console.log(array)
    //       });

// -----Map()
// let newName = supers.map((n) => n + ' name is')
// console.log(newName)

// function upperCase(value) {
//     return value.toUpperCase(); 
// }
// let supersCap = supers.map(upperCase)
// console.log(supersCap)

// ----Filter()
// function evenNum(value) {
//     return value % 2 === 0
// }
// let theEven = numbers.filter(evenNum);
// console.log(theEven)

//----------Reduce()
// function add(total, value, index, array){
//     return total + value;
// }
// let sum = numbers.reduce(add)
// console.log(sum)

//----------Some()
// function greaterThanTen(value){
//     return value > 10
// }

// let moreThanTen = numbers.some(greaterThanTen);
// console.log(moreThanTen)

//----------Every()
// function greaterThanTen(value){
//     return value > 10
// }

// let moreThanTen = numbers.every(greaterThanTen);
// console.log(moreThanTen)
 
//----------Find()
// function star(value) {
//    return value === 'Thor'
// }
// let selectHero = supers.find(star)
// console.log(selectHero)

//----------findIndex()
// function star(value) {
//    return value === 'Thor'
// }
// let selectHero = supers.findIndex(star)
// console.log(selectHero)

//---------CLASS WORK
//(1)
// fruits.forEach(function (value, index, array) {
//     console.log(`${index} ${value}`)
//     // alert(`${index} ${value}`)
// })
//(2)
// function uppCase (value) {
//    return value.toUpperCase()
// }
// let changeCase = fruits.map(uppCase)
// console.log(changeCase)
//(3)
// function letters(value) {
//     return value.length > 3;
// }
// let threeLetters = fruits.every(letters)
// console.log(threeLetters)

//(32)--------SETS AND WEEAK SETS---------------------------------

// const fruits = new Set();
// fruits.add('apple');
// fruits.add('banana')
// fruits.add('orange');
// fruits.add('plum').add('pear').add('apricots')

// fruits.delete('orange')

// let check = fruits.has('grapes')
// console.log(check)


// console.log(fruits.size)

// convert Array to Set

// let arrayFruits = ['apple', 'banana', 'orange', 'plum', 'peach', 'strawberry',
//     'raspberry'
// ];
// const fruits = new Set(arrayFruits);
// fruits.add('jean');
// console.log(fruits)

// WEAKSET
// let nums = [1, 2, 3, 4, 5];
// let weakSet = new WeakSet();
// weakSet.add(nums);
// nums = null
// console.log(nums)
// console.log(weakSet)

//-----------CLASS WORK
// const mortalCombat = new Set();
// mortalCombat.add('Scorpion').add('Sub-Zero').add('Reptile').add('Liu Kang')
// console.log(mortalCombat)
// mortalCombat.forEach(function(value, index, array) {
//     console.log(value)
// })

//(33)--------MAPS AND WEAK MAPS---------------------------------

// let gameMap = new Map();
// gameMap.set('Name', 'Sonic');
// gameMap.set(3, 'The number three');
// gameMap.set(true, 'booleans');
// gameMap.set('City', 'Pep');

// let getinfo = gameMap.get(3)
// let hasinfo = gameMap.has('Name')
// let deleteinfo = gameMap.delete('City')

// console.log(gameMap)
// console.log(getinfo)
// console.log(hasinfo)

//-----ITIRATION OF MAPS

// (1)--KEYS()---ALWAYS USE (FOR OF LOOP) FOR MAP KEYS
// for(let key of gameMap.keys() ) {
//     console.log(key);
// }

// gameMap.forEach(function(value, index) {
//     console.log(`${index} = ${value}`)
// });

// // (2)--VALUES()
// for(let value of gameMap.values() ) {
//     console.log(value);
// }

// (3)--ENTRIES()
// for(let [key, value] of gameMap.entries() ) {
//     console.log(`${key} = ${value}`);
// }

//----WEAK MAP
//Keys mus be objects and not primitive
//They do not support itiration
//Weak Map usage is rare
 
// ------CLASS WORK
// let strFight = new Map()
// strFight.set('Ryu', 'Japan')
// strFight.set('Ken', 'USA')
// strFight.set('Guile', 'USA').set('Blanka', 'Brazil')

// console.log(strFight)

// strFight.forEach(function(value, index) {
//     console.log(`${index} is from ${value}`)
// })

//(34)--------FUNCTIONS---------------------------------

//let greeting = 'Good Morning'  //global variable
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {    //anonyomus function: has no name
//     console.log('Gunners 4 life')
// });

// function testRun() {
//     let title = 'The game'  // local variable    
//     console.log(title)
// }
// testRun()

// -----CLASS WORK
// function myName() {
//     console.log('Ola Ahmed')
// }

//(35)--------FUNCTION EXPRESSIONS---------------------------------

// let myName = function() {
//     console.log('Ola Ahmed')
// }
// myName()
// let myWay = myName;
// myWay()

//---CLASS WORK

// let colours = function() {
//     console.log('red, green, blue')
// }
// colours()

// let myColours = colours;
// myColours()

//(35)--------FUNCTION PARAMETERS & ARGUMENTS---------------------------------

// function faveGame(game, player) {
   
//  console.log(`I love this game - ${game} ${player}`);
// }

// faveGame('Football', 'Ronaldo');

// function add(num1, num2) {
// console.log(num1 + num2)
// }
// add(5, 5, 1, 2, 3, 9)

// function add(num1, num2) {
//     console.log(arguments)
//     }
//     add(5, 5, 1, 2, 3, 9)

// function faveGame(game = "No game provided") {
   
// console.log(`My favourite game is  ${game}`);
//     }
// faveGame()

// let userInput = Number(prompt(`What do you want to convert? \n
//     1. Degree Celsius to Fahrenheit
//     2. Fahrenheit to Degree Celsius`))
// function tempCal(deg = 0, fah = 0) {
//     if(userInput === 1) {
//         deg = Number(prompt('Enter the value to convert'))
//         console.log(deg)
//         result = (deg * 1.8) + 32;
//         result = result.toFixed(0)
//         alert(`${result} Degree Celcius`)
    
//     } else if(userInput === 2) {
//         fah =  Number(prompt('Enter the value to convert'))
//         result = (fah - 32) * 0.5;
//         result = result.toFixed(0);
//         alert(`${result} Fahrenheit`)
//     } else {
//         prompt(`Please select the right number

//              1. Degree Celsius to Fahrenheit
//              2. Fahrenheit to Degree Celsius`)
//     }
// }

// tempCal()

// function favGame(game) {
//     if(game === undefined) {
//         console.log(`pls provide ur fav game! e.g favGame("Super Mario)`);
//     } else {
//         console.log(`My fav game is ${game}`)
//     }
// }

// favGame()

// ---CLASS WORK
// function favFood(response = 'empty, pls provide fav food') {
//     console.log(`ur fav food is ${response}`)
// }
// favFood()

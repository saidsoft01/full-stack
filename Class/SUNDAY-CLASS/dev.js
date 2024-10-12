//let isEven = function(value) {
//if(value%2 == 0)
//    console.log("Even number");
//else {
//  console.log("Odd number");
//}
//}

//isEven(5)



// @param {number} num1 the number to raise
//  @param {number} num2 the power to be raised by
  // @returns the outpput


//let numPower = function(num1, num2) {
  //  return Math.pow(num1, num2);
//}

//console.log(numPower(5,3)) // 5x5x5 = 125

//------5---- OUTPUT alert, prompt, confirm, console.log, console.warn, console.error

//function plus(a,b){
  //  return a+b;
//}
// alert(plus(10,20))

//console.log(prompt("what's your nama?", "Name:"));

//console.log(confirm("continue learning JS"));

//console.warn("this is a warning");
//console.error("this is an error");

//console.log(
//   "%c I can do anything i fucking want!",
//    "color: tomato; font-size: 15px; font-weight: bold");

//-----6-----VARIABLES let,const--------------------------

// let channelName = 'Dev Dreamer';
// channelName = "Mosh"
// console.log(channelName);
// const ourPlanet = "Earth"
// console.log(ourPlanet)

//-----7------DATA TYPES------------------------------------

//primitives        non-primitives

// Number           Objects(arrays, functions, objects)         
// String
// Boolean
// BigInt......write n @ the end of the number
// Symbol
// undefined
// null
//NaN is an error value of the number data type

//-----8------ARITHMETIC OPERATORS------------------------

// addition +              modulus %  remainder 5%2 = 1
//subtraction -            exponentiation **
// division /              increament ++
//multiplication *         decrement --

// let score = 90;
// console.log(++ score);
// console.log(score);

//  operator presidence BODMAS 

// let num1 = 10;
// let num2 = 20;
// let total = num1 + num2;
// console.log(++total);

//-----9------ASSIGNMENT OPERATORS-------------------------------
// they assign value to javascript variables  

// += operator
// let score = 100;
// score += 100;
// console.log(score)

// -= operator 
// let balance = 5000;
// balance -= 400;
// console.log(balance);

// *= operator
//let donation = 100;
//donation *= 500;
//console.log(donation)

// /= operator
//let sweet = 10;
//sweet /= 2;
//console.log(sweet);

// %= modulus operator
//let pizzaSlice = 10;
//pizzaSlice %= 3;
//console.log(pizzaSlice)


//----10------NUMBERS------------------------

//let num = 10**6;
//let mill = 1e6;
//let smallNum = 1e-6;
//console.log(num);
//console.log(mill)
//console.log(smallNum) 

//----11------NUMBER METHODS------------------------------

// toFixed()
//const PI = 3.141596254;
//let num = PI.toFixed(2)
//console.log(num)

//toPrecision()
//const PI = 3.141596254;
//let num = PI.toPrecision(3)
//console.log(num)

//toExponential()
//let mill = 1000000;
//num = mill.toExponential();
//console.log(num)

//toLocaleString())
//let milla = 1000000;
//thou = milla.toLocaleString();
//console.log(thou)
//1,000,000

//----12------STRINGS--------------------------------

 //let book = "The Sugar Girl"; double quotes
 //let author = 'Abanio'; single quotes
 //let series = `Netflix`; backtick 
 //let message = 'john said "pls don\'t do that"';
 //let backslash = "This is a backslash symbol: \\";

//----13------STRING CONCATENATION--------------------------------

//let day = "Good Mrng,";
//let question = " How are you?";
//let greeting = day + question;
//console.log(greeting);
//console.log(day + "have you had breakfast?");
//let firstName = prompt("What is you name?");
//console.log("Hello " + firstName + "," + " how are you?");
//let string = "10";
//let num = 10;
//let final = string.concat(num);
//console.log(final)

//----14------TEMPLATE LITERALS-------------------------------

//let gameName = 'Mario';
//let year  = 1999;
//let gamePad = 'Play Station'
//let info = `${gameName} was released in ${year} under ${gamePad}.`;
//console.log(info)
//let num1 = 10;
//let num2 = 15;
//let result = `The total is ${num1 + num2}`;
//console.log(result)

//----15------STRING METHODS------------------------------

//let course = "  JavaScript is an interesting lesson";
//console.log(course.length); lenght property
//console.log(course.trim()); removes uneccesary spaces
//console.log(course.toUpperCase());
//console.log(course.indexOf('a'))
//console.log(course.slice (0,12))
//console.log(course.replace("interesting", "fantastic"))
//console.log(course.charAt(4)) character position


//----16------DATE OBJECT--------------------------------

//let currentDate  = new Date();
//console.log(currentDate)
//console.log(currentDate.getFullYear()) method()
//let milliSeconds = new Date(981746938423);
//console.log(milliSeconds.getFullYear())
//let dateString = new Date("Aug 29 2019 08:34:00");
//console.log(dateString.getFullYear)
//let componentDate = new Date(1999, 11,  25, 14, 0, 0, 0);
//console.log(componentDate)
//currentDate.setFullYear(2024);
//console.log(currentDate.getFullYear());
//console.log(currentDate.toLocaleString('default', {month: 'short', weekday: 'long'}));

//let date = new Date();
//let hour = date.getHours();
//let min = date.getMinutes();
//console.log(`${hour}:${min}pm`)
//let day = date.toLocaleString('default', {weekday: 'long'});
//console.log(day)

//----17------MATH OBJECT--------------------------------

//let PI = Math.PI.toFixed(2);
//let fig = Math.random().toFixed(1) * 100
//console.log(fig)
//let min = Math.min(1,2,3,100,43,7,5000);
//console.log(min)
//let max = Math.max(1,2,3,100,43,7,5000).toLocaleString();
//console.log(max)
//let pow = Math.pow(5, 3);
//console.log(pow)
//console.log(Math.floor(5.7))
//console.log(Math.round(5.7))
//console.log(Math.round(5.4))

//let num1 = Math.random().toFixed(1) * 10;
//let num2 = Math.random().toFixed(1) * 10;
//let num3 = Math.random().toFixed(1) * 10;
//console.log(num1, num2, num3)
//largeNum = Math.max(num1, num2, num3)
//console.log(largeNum)

//-----18------COMPARISON OPERATORS--------------------------------

// = assignment operator
// == equal to operator
// != not eual to
// === strict equal operator(check value and data type)
// !== not equal to strict operator

//-----19------LOGICAL OPERATORS--------------------------------

//falsy value 
// false, undefined, null, empty string "", 0, NaN
//let a = 1;
//a = !a;
//console.log(a, typeof a)
//let x = 1; //true
//let y = 0; //false
//if(x && !y){
  //console.log("Hello")
//} 

//x || alert("This is ignored since x is true"); // alert is true
//y || alert("This is alarted since y is false"); // alert is true


//-----20------NULLISH COALESCING OPERATOR--------------------------------

// will return the first argument if it is not either NULL or UNDEFINED
// otherwise, it will retuen the second argument
//let game; // undefined
//let game2 = null; // null
//let game3 = ""; // empty string
//let game4 = "Super Mario"; // string
//console.log(game4 ?? game2);

//let user;
//console.log(user ?? "Guest") 

 //let score = 0;
 //console.log(0 ?? "no score registered");

//let course = 0;
//console.log(course ?? "Pls select a course");

//-----21-----CONTROL FLOW--------------------------------

// flow chart
 
//-----22------IF ELSE STATEMENTS-------------CONTROL STRUCTURE

//let x = "sonic";
//x = "lamad";
//if(x == 'lamad') {
 // console.log("Showman");
//} else {
//  console.error("wrong!!!");
//}

//let roll = 2;
//if (roll === 4) {
//  console.log("you rolled 4");
//} else if (roll === 5){
//  console.log("you rolled 4");
//} else if (roll === 6) {
//  console.log("you rolled 6");
//} else {
//  console.log("you rolled an unknown number");
//}

//let num = 10 + 2;
//if (num > 2 && num < 20){
//  console.log("TRUE")
//} else {
//  console.log("FALSE")
//1}

//let user = "employee";
//let guest = "ola";
//if (user === guest) {
//  console.log("Login Denied");
//  } else if  (user === "employee") {
//    console.log("Successfully logged in");
//  } 

 // myName = "Olart";
 // console.log(myName.length)
 // if (myName.length > 5) {
 //   alert("more than 5 characters");
 // } else if (myName.length == 5) {
 //   alert("exactly 5 letters");
 // } else {
 //   alert("less than 5");
 // }

//-----23------SWITCH STATEMENTS-------------------CONTROL STRUCTURE

// let shape = prompt('Select a shape (Circle, Square, Rectangle)').toLowerCase();
// console.log(shape)

// switch(shape) {
//   case 'square':
//     let lenght = Number(prompt('Input the length of a side'))
//     console.log(lenght ** 2)
//     break;

//   case 'circle':
//     let radius = Number(prompt('Input the radius of your circle'))
//     let result = Math.PI * (radius ** 2)
//     console.log(result.toLocaleString())
//     break;
    
//   case 'rectangle':
//     let lenghtSide = Number(prompt('Input the length of your rectangle'))
//     let breadthSide = Number(prompt('Input the breadth of your rectangle'))
//     console.log(lenghtSide * breadthSide)
//     break;

//   default:
//     console.log('wrong input')
     
// }


//let roll = Math.random().toFixed(1) * 10;
//switch(roll) {
//case 1:
 // console.log("you rolled 1");
 // break;
 // case 2:
 // console.log("you rolled 2");
 // break;
 // case 3:
 // console.log("you rolled 3");
 // break;
 // case 4:
 // console.log("you rolled 4");
 // break;
 // default:
   // console.log(`the number ${roll} is not possible`);
//}

//let today = new Date().toLocaleString('default', {weekday: 'short'});

//switch(true) {
//  case today === 'Mon':
 //   console.log(`today is ${today}`);
//    break;
//  case today === 'Tue':
//    console.log(`today is ${today}`);
//    break;  
//    case today === 'Wed':
//    console.log(`today is ${today}`);
//    break;  
//    case today === 'Thu':
//    console.log(`today is ${today}`);
//    break;  
//case today === 'Fri':
//    console.log(`today is ${today}`);
//    break;  
//    case today === 'Sat':
//    console.log(`today is ${today}`);
//    break;  
//    case today === 'Sun':
//    console.log(`today is ${today}`);
//    break;  
//    default:
//    console.log(`no idea!!`);
//}

//let favFood = "beans";
//switch(true) {
//  case favFood === 'rice':
//    console.log(`thats's right! ${favFood} is my favourite!`);
//    break;
  
//    case favFood === 'spag':
//    console.log(`thats's right! ${favFood} is my favourite!`);
//    break;

//    case favFood === 'beans':
//    console.log(`thats's right! ${favFood} is my favourite!`);
 //   break;

//    case favFood === 'eba':
//    console.log(`thats's right! ${favFood} is my favourite!`);
//    break;

//    case favFood === 'amala':
//    console.log(`thats's right! ${favFood} is my favourite`);
//    break;

//    default:
//    console.log(`${favFood} no found.....i'm hungry`);
//    break;
//}

//-----24------TERNARY OPERATOR-------------------------------

//let age = 18;
//if(age >= 18) {
// console.log("you can vote");
//} else {
  //console.log("sorry, you can't vote");
//}

//let message = age >= 18 ? "you can vote" : "sorry, you can't vote";
//console.log(message)

//let password = "redruby123";
//message = (password === "redruby123") ? "welcome" : "wroge password";
//console.log(message)
//message = "";
//message =(1 > 10) ? "considion is true" : "considtion is false";
//console.log(message)

//let time = "14:00";
//greeting = time < '12:00' ? "good morning" : "good evening";
//console.log(greeting)

//-----25------FOR LOOP-------------------------------

//for loop is used to loop over a piece of code a set numbre of times. it's made up of:
// 1) the initialiser
// 2) the condition
// 3) the final expression
// for ([initialiser]; [condition]; [final expression]) {
//    console.log()
//    }

//for (let i = 0; i <= 10; i++) {
//console.log(i);
//} 
//apart from i, we can use any variable

// const colors = ['red', 'blue', 'yellow', 'lilac', 'orange'];

//for (let color = 0; color < colors.length; color++) {
//  console.log(`${colors[color]}  is the best`);
//}

//-----25------WHILE AND DO WHILE LOOP-------------------------------

// while loop: will repeat a block of code whilst a given condition remain true

//let i = 0;
//while(i <= 10){
//console.log(i);
//i++;
//}

//const colors = ['red', 'blue', 'yellow', 'green', 'orange'];
//let col = 0;
//while (col < colors.length){
//  console.log(colors[col]);
//  col++;
//}

//do while loop: the code will be excuted at least once before the condition is tested
 // even if the condition returns false,by default, the code block will run at least once.

 //let i    = 0;

 //do {
  //console.log(i);
 // i++;
 //} while (i <= 10)

// let gate = ''
//  let myGuy = document.getElementById('yello');
//  let greet = (a, b) =>{
//   gate = a + b
//  }
//  greet('hello',' Dozie')
//  console.log(gate)
// myGuy.innerHTML =gate
 

// let list = document.querySelector('#yello');
// console.log(list.innerHTML);
// list.innerHTML =`<h2>Dozie is a good boy</h2>`


//  const ogaName = document.querySelector('#name')
//  ogaName.innerHTML = ogaName.textContent + ' is our instructor';

// const para = document.getElementById('para');
// let randNum = Math.floor(Math.random() * 100) + 1;
// let chances = 0;
// let result = '';


// function guessGame() {

// chances++
// console.log(chances)
// let userNum = prompt('Guess a number from 1 to 100');

// if (userNum >= 1 && userNum <= 100 && chances <= 5) {
//   if (userNum == randNum) {
//     alert('correct guess');

  
//   } else if (userNum > randNum) {
//     alert('Your number is too high');
  
  
//     guessGame();
//   } else if (userNum < randNum) {
//     alert('Your number is too low');
 
//    guessGame();
//   }
// }
// else if (chances > 5) {
//   alert('You have used up your chances, You lose 💔💔💔');
// }
// else {
//   alert('wrong input, please use between 1 - 100')
// }

// }


// const para = document.getElementById('para');
// let randNum = Math.floor(Math.random() * 100) + 1;
// let chances = 0;
// chances.value = chances
// let result = '';

// function guessGame() {
//   chances++
//   const inputer = document.getElementById('init').value;
//   let userNum = inputer;
  
//   if (userNum >= 1 && userNum <= 100 && chances <= 5) {
//     if (userNum === randNum) {
//       result = 'correct guess 🍾🎉🎊 Congratulations !!!'
//       jara.innerHTML = result;      
//     }
//      else if (userNum > randNum) {
//      result = 'Your number is too high...number of chances used: ';
//      para.innerHTML = result + chances;     
//     }
//      else if (userNum < randNum) {
//       result = 'Your number is too low...number of chances used:';
//      para.innerHTML = result + chances;  
//     }
//   }
//   else if (chances > 5) {
//     para.innerHTML = 'Sorry!!! You have used up your chances, You lose 💔💔💔 pls refresh to start again';
//   }
//   else {
//     para.innerHTML = '⚠️⚠️⚠️wrong input, please use between 1 - 100⚠️⚠️⚠️'
//   }
  
//   }
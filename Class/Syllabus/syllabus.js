
// 12-OCT-24 ---------SATURDAY CLASS-----------------

//----- Synchronous JS referes to code that executes line by line. Where each
//line must finish executing before the next line starts. This is the 
//default way JS works

// console.log('run');
// console.log('the run');
// console.log('then run');

//-----Asynchronous JS allows your code to continue running even if certain
//tasks haven't finished yet. This is crucial for creating responsive and 
//effective web application

// setTimeout(() => console.log('time up'), 3000)
// console.log('hey')

//

//-----CALL BACK FUNCTION
//This is a function that is passed as an argument to another function

// let data = ['a', 'b', 'c', 'd']

// function call() {
//     setTimeout(() => {
//         const body = document.querySelector('body')
//         body.innerHTML = ''
//         data.forEach((item) => {
//             const arrItem = document.createElement('p')
//             arrItem.textContent = item
//             body.append(arrItem)
//         })
//     }, 1000)
// }

// function newItem(item, callback) {
//     setTimeout(() => {
//         data.push(item)
//         callback()
//     }, 2000)
// }
// newItem('slate', call)  // don't use the call() cuz it wont wait for 5sec
// call()

const input = document.querySelector('input')
const button = document.querySelector('button')

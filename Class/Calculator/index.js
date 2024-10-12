const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

function checkRock() {
  let botPick = Math.floor(Math.random() * 3) + 1;
  if (botPick == 1) {
    result.innerHTML = "You picked rock, Bot picked rock, Tie";
  } else if (botPick == 2) {
    result.innerHTML  = "You picked rock, Bot picked Paper, You Lose";
  } else {
    result.innerHTML  = "You picked rock, Bot picked Scissors,You win";
  }
}
function checkPaper() {
  let botPick = Math.floor(Math.random() * 3) + 1;
  if (botPick == 1) {
    result.textContent = "You picked Rock, Bot picked rock,You win";
  } else if (botPick == 2) {
    result.textContent = "You picked Rock, Bot picked Paper, Tie";
  } else {
    result.textContent = "You picked Rock, Bot picked Scissors, You Lose";
  }
}
function checkScissors() {
  let botPick = Math.floor(Math.random() * 3) + 1;
  console.log(botPick);
  if (botPick == 1) {
    result.textContent = "You picked Scissors, Bot picked rock,  You Lose";
  } else if (botPick == 2) {
    result.textContent = "You picked Scissors, Bot picked Paper, win";
  } else {
    result.textContent = "You picked Scissors, Bot picked Paper, Tie";
  }
}



// function outer(x){
//     return function(y){
//         return x + y
//     }
// }
// const value = outer(3)
// console.log(value(2))

// function test(x,y,z,q){
//   return  x + y *z /q
// }
// const value = test(5,3,4,2)
// console.log(value)

const weekend = {
    subject: 'javascript',
    time: '9am - 1pm',
    number: 4,
    func: function totalStudents(){
        return `${weekend.time}`
    }
}

weekend.closeTime = '1pm'
weekend.time = '10:30 am - 1pm'
delete weekend.subject
console.log(weekend.func())
// console.log(weekend.toString())
//const bluePill = document.getElementById('blue');
// const result = document.getElementById('result');
// const redPill = document.getElementById('red');
// const selection = document.getElementsByClassName('pick');
//const blank = document.getElementById('null');
//const image = document.getElementById('image')
//const revealBtn = document.querySelector('.pick-blue');
//const revealImage = document.querySelector('.reveal')

// console.log( revealBtn.classList)

// function matrix() {

//         if (selection ==  bluePill) {

//         }
//       else {
//         revealBtn.classList.add('reveal')
//         blank.innerHTML = '';
//         result.innerHTML = `welcome to the matrix`;

//       }
// }

const blank = document.getElementById("null");
const revealBtn = document.querySelector(".pick-blue");
//console.log(revealBtn)
const image = document.querySelector(".hide");
//console.log(image)

function matrixB() {
  if (image.classList.contains('pick-blue')) {
      image.classList.remove('hide');
      }
  else {
    image.classList.add('hide')
    image.style.display = "block"
    blank.innerHTML = "Welcome to the Matrix, NEO!!!"
    blank.style.fontSize = "40px"
  }
}
revealBtn.addEventListener('click', matrixB);

// function matrixB() {

//   image.classList.toggle("hide");
//   if (image.classList.contains('hide')) {
//     blank.innerHTML =  "what you choose will determine your future"
//    blank.style.fontSize = "20px"

//   }
//   else {blank.innerHTML = "Welcome to the Matrix, NEO!!!"
//     blank.style.fontSize = "40px"

//   }


// }


// const redPill = document.getElementById("red");
// const selection = document.getElementsByClassName("pick");

// function maxim() {
//   if (selection == redPill) {
//   } else {
//     blank.innerHTML = "";
//     result.innerHTML = `Now u die Mr Anderson`;
//   }
// }

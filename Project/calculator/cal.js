const link = document.getElementById('link');

let cssFile = 'calcu.css';
let cssFile2 = 'calcu2.css';
let cssFile3 = 'calcu3.css';

let myArray =[cssFile, cssFile2, cssFile3];
link.href = myArray[0];
let i = 0;
function changeTheme(){
  i++;
  if (i >= myArray.length){
    i = 0;
     }
     link.href = myArray[i];
    }











const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".kaku");
const specialChars = ["+", "-", "*", "/", "="];
let output = "";


const calculate = (btnValue) => {
    if(btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
        } else if(btnValue === "RESET"){
            output = ""
        }else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1);
        }else{
            if(output === "" && specialChars.includes(btnValue)) return;
            output += btnValue;
        }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
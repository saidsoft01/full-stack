const billInput = document.querySelector(
  "#bill-input"
);
const peopleInput = document.querySelector(
  "#people-input"
);
const tips = document.querySelectorAll(
  ".tip-option"
);
const custom = document.querySelector("#custom");
const customInput = document.querySelector(
  "#custom-input"
);
const customText = document.querySelector(
  "#custom-text"
);
const tipTotal = document.querySelector("#tip");
const total = document.querySelector("#total");

let tipValue = 0;
let totalValue = 0;
let bill;
let peopleCount;

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipValue = Number(tip.innerHTML);
    console.log(tipValue);
    calculate();

    // tip.classList.
  });
});

custom.addEventListener("click", () => {
  if (!customText.classList.contains("hidden")) {
    customText.classList.add("hidden");
    customInput.classList.remove("hidden");
  }
});
// customInput.addEventListener('focusout',()=>{
//     customText.classList.remove('hidden')
//     customInput.classList.add('hidden')
// })

customInput.addEventListener("input", () => {
  tipValue = Number(customInput.value);
  calculate();
});

billInput.addEventListener("input", () => {
  bill = billInput.value;
  calculate();
});
peopleInput.addEventListener("input", () => {
  peopleCount = Number(peopleInput.value);
  calculate();
});

function calculate() {
  if (
    bill > 0 &&
    tipValue > 0 &&
    peopleCount > 0
  ) {
    let tip =
      ((tipValue / 100) * bill) / peopleCount;
    tipTotal.innerHTML = `$` + tip.toLocaleString();
    let billTotal =
      (tip + Number(bill)) / peopleCount;
    total.innerHTML =
      `$` + billTotal.toLocaleString();
  } else {
    tipTotal.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }
}

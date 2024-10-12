const icon = document.getElementById("icon1");
console.log(icon.class)

const answers = document.getElementsByClassName("content");
console.log(answers.classList)

const answersArr = Array.from(answers);
console.log(answersArr);

function closeAllAnswers() {
  const answers = document.getElementsByClassName("content");
  const answersArr = Array.from(answers);

  answersArr.forEach((element, index) => {
    console.log(element);
    element.classList.remove("open");
    const icon = document.getElementById("icon" + (index + 1));
    icon.src = "./assets/images/icon-plus.svg";
  });
}

function toggleContent(id) {
  closeAllAnswers();
  console.log(`we have clicked on answer${id}`);
  const answer = document.getElementById(`answer${id}`);
  const icon = document.getElementById("icon" + id); 
  console.log(icon.src)
  if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    icon.src = "./assets/images/icon-plus.svg";
  } else {
    icon.src = "./assets/images/icon-minus.svg";
    answer.classList.add("open");
    console.log(icon.src)
  }

  console.log(answer.classList.contains("open"));
}

// toggleContent();

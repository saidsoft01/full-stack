const img1 = "url(./images/img1.jpg)";

const img2 = "url(./images/img2.jpg)";

const img3 = "url(./images/img3.jpg)";

const img4 = "url(./images/img4.jpg)";

const imgArr = [img1, img2, img3, img4];

let currentImg = 0;

const carousel =
  document.querySelector("#carousel");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

carousel.style.backgroundImage =
imgArr[currentImg];
right.addEventListener("click", () => {
    currentImg++
    if(currentImg == imgArr.length){
        currentImg = 0;
    }
    carousel.style.backgroundImage =
      imgArr[currentImg];
});

left.addEventListener("click", () => {
    if(currentImg == 0){
        currentImg = imgArr.length - 1;
    }
    currentImg--
    carousel.style.backgroundImage =
      imgArr[currentImg];
});
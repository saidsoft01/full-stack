function myFunction() {
    document.getElementById("title").innerHTML = "Fuckyou";
}
function showDate() {
    const d = new Date();
    document.getElementById('date').innerHTML = d;
}

function multiply(a, b) {
    return a * b;
}

console.log(showDate());
console.log(multiply(1, 5));
console.log(multiply(6, 5));
console.log(multiply(44, 98));
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");

let curScore1 = document.querySelector(".curScore1");
let curScore2 = document.querySelector(".curScore2");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let hold1 = document.querySelector(".hold1");
let hold2 = document.querySelector(".hold2");

let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");

let stepCoun1 = 0;
let stepCoun2 = 0;

let result1 = 0;
let result2 = 0;
function player1() {
  btn1.addEventListener("click", () => {
    let randomNum1 = Math.floor(Math.random() * 10);
    curScore1.textContent = randomNum1;
    result1 += randomNum1;
    if (randomNum1 === 0) {
      result1 = 0;
      btn1.disabled = true;
      btn2.disabled = false;
    }
    score1.textContent = result1;
    if (result1 >= 100) {
      alert("User 1 won");
    }
    btn1.classList.add("bg_color");
    btn2.classList.remove("bg_color");
  });
  hold1.addEventListener("click", () => {
    stepCoun1 += result1;
    step1.textContent = stepCoun1;
    result1 = 0;
    score1.textContent = result1;

    if (stepCoun1 >= 100) {
      alert("User 1 won");
    }
    // btn1.disabled = true;
    // btn2.disabled = false;
  });
}
player1();

function player2() {
  btn2.addEventListener("click", () => {
    let randomNum2 = Math.floor(Math.random() * 10);
    curScore2.textContent = randomNum2;
    result2 += randomNum2;
    if (randomNum2 === 0) {
      result2 = 0;
      btn1.disabled = false;
      btn2.disabled = true;
    }
    score2.textContent = result2;
    if (result1 >= 100) {
      alert("User 1 won");
    }
    btn2.classList.add("bg_color");
    btn1.classList.remove("bg_color");
  });
  hold2.addEventListener("click", () => {
    stepCoun2 += result2;
    step2.textContent = stepCoun2;
    result2 = 0;
    score2.textContent = result2;
    if (stepCoun2 >= 100) {
      alert("User 2 won");
    }
    // btn1.disabled = false;
    // btn2.disabled = true;
  });
}
player2();

var screen1 = document.getElementById("screen1");

var screen2 = document.getElementById("screen2");

var button = document.getElementById("start");

let score = document.createElement("score")
score.textContent = "Score"
screen2.appendChild(score)
let point = 0;
var time = 3;

// Variable d'etat du jeu
var inGame = false;

var timeLeft = document.createElement("h2")
timeLeft.textContent = "Temps restant " + time;

var containerTime = document.getElementById("time-left");
containerTime.appendChild(timeLeft);

button.addEventListener("click", changement1, false);
console.log(button);

var intervalId;

function changement1() {

  screen1.style.display = "none";
  screen2.style.display = "inherit";
  intervalId = setInterval(nombre, 1000);
  if(time == 0){
    clearInterval(intervalId);
  }
  inGame = true;
}

let eltLetter = document.getElementById("displayedLetter");

let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomNumber() {
  let number = Math.floor(Math.random() * alphabetArray.length);
  return number;
}

let letterRandom = alphabetArray[randomNumber()];
eltLetter.textContent = letterRandom;

window.addEventListener("keydown", function(event) {
  if (inGame) {
    if (event.key.toLowerCase() === eltLetter.textContent.toLowerCase()) {
      letterRandom = alphabetArray[randomNumber()];
      eltLetter.textContent = letterRandom;
      point += 1;
      time = 3;
      timeLeft.textContent = "Temps restant : " + time
    } else {
      screen3.style.display = "inherit";
      screen2.style.display = "none";
      finalscore.textContent = "Score Total :" + point;
      inGame = false;
      clearInterval(intervalId);
    }
    score.textContent = "Score : " + point;
  }
}, false);


var compteurElt = document.getElementById("compteur");
var finalscore = document.getElementById("finalscore");
var btnRegistrer = document.getElementById("register");
var tryAgain = document.getElementById("newGame");


// Diminue le compteur jusqu'à 0
function nombre() {
  time = time - 1;
  console.log(time);
  timeLeft.textContent = "Temps restant " + time;
  if (time === 0) {
    console.log("game over");
    timeLeft.textContent = "Game over";
    finalscore.textContent = "Score Total : " + point;
    inGame = false;
    screen2.style.display = "none";
    screen3.style.display = "inherit";
    clearInterval(intervalId);
  }
}

tryAgain.addEventListener("click", changement3, false);
console.log(button);

function changement3() {

  screen3.style.display = "none";
  screen1.style.display = "inherit";
  point=0;
  time =3;

}

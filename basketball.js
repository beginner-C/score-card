let HomeScore = document.getElementById("score1");
let GuestScore = document.getElementById("score2");
console.log(HomeScore.innerText);
let score = [0, 0];
console.log(score);
let scoreH = score[0];
let scoreG = score[1];
function addOnehome() {
  scoreH += 1;
  HomeScore.innerText = scoreH;
}
function addTwohome() {
  scoreH += 2;
  HomeScore.innerText = scoreH;
}

function addThreehome() {
  scoreH += 3;
  HomeScore.innerText = scoreH;
}

function addOneguest() {
  scoreG += 1;
  GuestScore.innerText = scoreG;
}

function addTwoguest() {
  scoreG += 2;
  GuestScore.innerText = scoreG;
}

function addThreeguest() {
  scoreG += 3;
  GuestScore.innerText = scoreG;
}
function Reset() {
  HomeScore.innerText = 0;
  GuestScore.innerText = 0;
}

let checkimage = ["emoji1.jpg", "emoji2.jpg", "emoji3.jpg", "emoji4.jpg", "emoji5.jpg", "emoji6.jpg", "emoji7.jpg", "emoji8.jpg", "emoji9.jpg", "emoji10.jpg", "emoji11.jpg", "emoji12.jpg"];

let clickedEmojis = [];

function randomnum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffleAndUpdate() {
  let rannumarr = [];

  for (i = 0; i < 12; i++) {
    let rannum = randomnum(0, 12);

    if (rannumarr.includes(rannum)) {
      rannumarr.push(rannum);
    } else {
      i--;
      continue;
    }

    document.getElementById("img" + (i + 1)).src = checkimage[rannum];
  }
}

var count = {};
var score = 0;

function suffle(box) {
  let imgelement = document.getElementById(box).src;

  if (clickedEmojis.includes(imgelement)) {
    allclick();
    clickedEmojis = [];
  } else {
    clickedEmojis.push(imgelement);
    score++;
    document.getElementById("score").innerText = "Score: " + score;
    shuffleAndUpdate();
  }
  if (score == 12) {
    alrdyclick();
    clickedEmojis = [];
  }
}

function reset() {
  document.getElementById("button01").src = "emoji1.jpg ";
  document.getElementById("button02").src = "emoji2.jpg ";
  document.getElementById("button03").src = "emoji3.jpg ";
  document.getElementById("button04").src = "emoji4.jpg ";
  document.getElementById("button05").src = "emoji5.jpg ";
  document.getElementById("button06").src = "emoji6.jpg ";
  document.getElementById("button07").src = "emoji7.jpg ";
  document.getElementById("button08").src = "emoji8.jpg ";
  document.getElementById("button09").src = "emoji9.jpg ";
  document.getElementById("button10").src = "emoji10.jpg ";
  document.getElementById("button11").src = "emoji11.jpg ";
  document.getElementById("button12").src = "emoji12.jpg ";

  score = 0;
  document.querySelector(".count").innerText = "Score: " + score;
  clickedEmojis = [];
}

function allclick() {
  document.getElementById("allclicked").style.display = "block";
}

function OKX() {
  document.getElementById("allclicked").style.display = "none";
}

function alrdyclick() {
  document.getElementById("alreadyclicked").style.display = "block";
}

function OKO() {
  document.getElementById("alreadyclicked").style.display = "none";
}

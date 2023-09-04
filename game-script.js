var clocker = 60;
var score = 0;
var smashrn = 0;
var comboCount = 0;
var bonusPoints = 0;

function increaseScore() {
  score += 10 + bonusPoints;
  document.querySelector("#scoreval").textContent = score;
}

function getNewSmash() {
  smashrn = Math.floor(Math.random() * 10);
  document.querySelector("#smashval").textContent = smashrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function generateSpecialBubble() {
  var specialNum = Math.floor(Math.random() * 10) + 1;
  if (specialNum === 1) {
    return "gold";
  } else if (specialNum === 2) {
    return "rainbow";
  } else {
    return "";
  }
}

function increaseScoreWithCombo() {
  comboCount++;
  bonusPoints = comboCount * 5;
  score += 10 + bonusPoints;
  document.querySelector("#scoreval").textContent = score;
  document.querySelector("#comboval").textContent = comboCount;
  document.querySelector("#bonusval").textContent = bonusPoints;
}

function resetCombo() {
  comboCount = 0;
  bonusPoints = 0;
  document.querySelector("#comboval").textContent = comboCount;
  document.querySelector("#bonusval").textContent = bonusPoints;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === smashrn) {
    increaseScoreWithCombo();
    makeBubble();
    getNewSmash();
  } else {
    resetCombo();
  }
});

function runclocker() {
  var clockerint = setInterval(function () {
    if (clocker > 0) {
      clocker--;
      document.querySelector("#clockerval").textContent = clocker;
    } else {
      clearInterval(clockerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Thank you for playing :) </br> Made By: Nehal Pal - 20BCG10070</h1>`;
    }
  }, 1000);
}

runclocker();
makeBubble();
getNewSmash();

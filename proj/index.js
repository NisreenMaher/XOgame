var reset = document.querySelector("#new");
var squares = document.querySelectorAll(".squar");
var state = document.querySelector(".bar span");
var twoPlayer = document.getElementsByClassName("easy")[0];
var comp = document.querySelector(".hard");
var img = document.querySelectorAll("img");
var stateofgame = false;
var arraygame = [];
var compgame = false;
var x = true;
var num;
var count = 0;
comp.addEventListener("click", (event) => {
  compgame = true;
  comp.classList.add("selected");
  twoPlayer.classList.remove("selected");
  resetfun();
});
twoPlayer.addEventListener("click", (event) => {
  compgame = false;
  comp.classList.remove("selected");
  twoPlayer.classList.add("selected");
  resetfun();
});
//console.log(reset);
reset.addEventListener("click", resetfun);
function resetfun() {
  for (let i = 0; i < img.length; i++) {
    img[i].src = "";
    stateofgame = false;
    arraygame = [];
    state.textContent = "";
    count = 0;
  }
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", (event) => {
    if (!compgame) {
      if (!stateofgame) {
        if (arraygame[i]) return;
        if (x) {
          img[i].src = "x.png";
          x = !x;
          arraygame[i] = "x";
          count++;
        } else {
          img[i].src = "o.png";
          x = !x;
          arraygame[i] = "o";
          count++;
        }
      }
    } else {
      if (stateofgame) return;
      if (arraygame[i]) return;
      img[i].src = "x.png";
      arraygame[i] = "x";
      count++;
      checkGame();
      generateRandomNumber();
      arraygame[num] = "o";
      img[num].src = "o.png";
      count++;
    }
    checkGame();
  });
}
function generateRandomNumber() {
  num = Math.floor(Math.random() * 9);
  if (arraygame[num]) generateRandomNumber();
}
function select() {}

function checkGame() {
  var h1 =
    arraygame[0] &&
    arraygame[0] == arraygame[1] &&
    arraygame[1] == arraygame[2];
  var h2 =
    arraygame[3] &&
    arraygame[3] == arraygame[4] &&
    arraygame[4] == arraygame[5];
  var h3 =
    arraygame[6] &&
    arraygame[6] == arraygame[7] &&
    arraygame[7] == arraygame[8];

  var v1 =
    arraygame[0] &&
    arraygame[0] == arraygame[3] &&
    arraygame[3] == arraygame[6];
  var v2 =
    arraygame[1] &&
    arraygame[1] == arraygame[4] &&
    arraygame[4] == arraygame[7];
  var v3 =
    arraygame[2] &&
    arraygame[2] == arraygame[5] &&
    arraygame[5] == arraygame[8];

  var d1 =
    arraygame[0] &&
    arraygame[0] == arraygame[4] &&
    arraygame[4] == arraygame[8];
  var d2 =
    arraygame[2] &&
    arraygame[2] == arraygame[4] &&
    arraygame[4] == arraygame[6];

  var check = [h1, h2, h3, v1, v2, v3, d1, d2];
  if (!check.includes(true)) {
    if (count == 9) state.textContent = "No one win";
    //console.log((arraygame[0]==arraygame[1])==arraygame[2]);
    return;
  } else {
    console.log("l");
    var s = check.indexOf(true);
    if (s == 0 || s == 3 || s == 6) state.textContent = arraygame[0] + " Win";
    if (s == 1 || s == 4 || s == 7) state.textContent = arraygame[4] + " Win";
    if (s == 2 || s == 5) state.textContent = arraygame[8] + " Win";
    stateofgame = true;
    //state.textContent=arraygame[0]+" Win";
  }
}

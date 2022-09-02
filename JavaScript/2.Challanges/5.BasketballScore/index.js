let hScoreBoard = 0;
let gScoreBoard = 0;
let hScore = document.getElementById("hScore-el");
let gScore = document.getElementById("gScore-el");

hScore.textContent = hScoreBoard;
gScore.textContent = gScoreBoard;

function hPlusOne()
{
  console.log("clicked");
  hScoreBoard += 1;
  hScore.textContent = hScoreBoard;
}
function hPlusTwo()
{
  console.log("clicked");
  hScoreBoard += 2;
  hScore.textContent = hScoreBoard;
}
function hPlusThree()
{
  console.log("clicked");
  hScoreBoard += 3;
  hScore.textContent = hScoreBoard;
}
function gPlusOne()
{
  console.log("clicked");
  gScoreBoard += 1;
  console.log(gScoreBoard)
  gScore.textContent = gScoreBoard;
}
function gPlusTwo()
{
  console.log("clicked");
  gScoreBoard += 2;
  gScore.textContent = gScoreBoard;
}
function gPlusThree()
{
  console.log("clicked");
  gScoreBoard += 3;
  gScore.textContent = gScoreBoard;
}

function newGame()
{
  hScoreBoard = 0;
  gScoreBoard = 0;
  hScore.textContent = hScoreBoard;
  gScore.textContent = gScoreBoard;
}
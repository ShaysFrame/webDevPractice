let characters = [];

const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passAreaOneEl = document.getElementById("pass-field-one");
let passAreaTwoEl = document.getElementById("pass-field-two");

function update()
{
  let select = document.getElementById("pass-length");
  let value = select.options[select.selectedIndex].value;
  return value;
}

  console.log(update());

function getRandomIndex(){
  return Math.floor(Math.random()*characters.length);
}

function getPass(){
  let passString = "";
  for (let counter = 0; counter < update(); counter++)
  {
    passString += characters[getRandomIndex()];
  }
  console.log(passString);
  return passString
}

function genPass(){
  passAreaOneEl.textContent = getPass();
  passAreaTwoEl.textContent = getPass();
}



/* 
// With Pass lenth feature

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passAreaOneEl = document.getElementById("pass-field-one");
let passAreaTwoEl = document.getElementById("pass-field-two");

function update()
{
  let select = document.getElementById("pass-length");
  let value = select.options[select.selectedIndex].value;
  return value;
}

  console.log(passLength);

function getRandomIndex(){
  return Math.floor(Math.random()*characters.length);
}

function getPass(){
  let passString = "";
  for (let counter = 0; counter < update(); counter++)
  {
    passString += characters[getRandomIndex()];
  }
  console.log(passString);
  return passString
}

function genPass(){
  passAreaOneEl.textContent = getPass();
  passAreaTwoEl.textContent = getPass();
}
 */

/* Just password Generator without additional functionalities. 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passAreaOneEl = document.getElementById("pass-field-one");
let passAreaTwoEl = document.getElementById("pass-field-two");


function getRandomIndex(){
  return Math.floor(Math.random()*characters.length);
}

function getPass(){
  let passString = "";
  for (let counter = 0; counter <= 15; counter++)
  {
    passString += characters[getRandomIndex()];
  }
  console.log(passString);
  return passString
}

function genPass(){
  passAreaOneEl.textContent = getPass();
  passAreaTwoEl.textContent = getPass();
} */
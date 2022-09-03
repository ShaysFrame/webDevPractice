/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");



convertBtn.addEventListener("click", function(){
  let inputVal = inputEl.value;
  const feet = (inputVal*3.281).toFixed(3);
  const meter = (inputVal/3.281).toFixed(3);

  const gallon = (inputVal*0.264).toFixed(3);
  const liter = (inputVal/0.264).toFixed(3);

  const pounds = (inputVal*2.204).toFixed(3);
  const kilogram = (inputVal/2.204).toFixed(3);
  
  lengthEl.innerHTML = ` ${inputVal} meters = ${Number(feet)} feet | ${inputVal} feet = ${Number(meter)} meters 
  `;
  volumeEl.innerHTML = ` ${inputVal} litters = ${Number(gallon)} gallons | ${inputVal} gallons = ${Number(liter)} liters 
  `;
  massEl.innerHTML = ` ${inputVal} kilos = ${Number(pounds)} pounds | ${inputVal} pounds = ${Number(kilogram)} kilos 
  `;
})

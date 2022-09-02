// Challange set the counter to 0 once saved an entry

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

















/* // 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl)

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let entryOutput = count + " - ";
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += entryOutput;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
} */
















/* // 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl)

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let entryOutput = " " + count + " - ";
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += entryOutput;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
}
 */


















/* // 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let elCount = count;
    // 3. Render the variable in the saveEl using innerText
    // saveEl.innerText;
    saveEl.innerText +=" " + count + " - ";
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
 */














/* // document.getElementByID("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCCase
let countEl = document.getElementById("count-el")

console.log(countEl);

let count = 0;
function increment()
{
  console.log("Clicked inc-btn");

  count += 1;
  countEl.innerText = count;

  console.log(count);
}

// 1. Create a function, save(), which logs out the count when it's called

function save()
{
  console.log("Clicked save-btn")
  console.log(count);
} */















// // initialize the count as 0
// // listen for clicks on the increment button
// // increment the count varible when the button is clicked
// // change the count-el in the HTML to reflect the new count

// let count = 0;

// function increment(){
//   console.log("clicked")
//   count = count + 1;
//   console.log(count);
// }














// let lapsCompleted = 0;
// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function f_lapsCompleted()
// {
//   lapsCompleted = lapsCompleted + 1;
// }

// f_lapsCompleted();
// f_lapsCompleted();
// f_lapsCompleted();

// console.log(lapsCompleted);




// initialize the count as 0
// listen for clicks on the increment button
// increment the count varible when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//   console.log("The button was clicked");
// }







// function myLogger()
// {
//   console.log(42)
// }
// myLogger();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logSum()
// {
//   let sum = lap1 + lap2 + lap3;
//   console.log(sum);
// }

// logSum();








// document.getElementByID("count").innerText = 5;

// let count = 5;
// count = count + 1;
// console.log(count)

// create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Declare it down to 25, and then finally increase it to 70
// Console.long the value after each step

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

















/* // Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let arr = ["you dog shit don't look at here", "Still looking at it?", "Leave already lol"]

localStorage.setItem("Data", JSON.stringify(arr));
let dataFromLocalStorage = JSON.parse(localStorage.getItem("Data"));

console.log(dataFromLocalStorage);
 */












/* let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logCourse(courses)
{
  for (let count = 0; count < courses.length; count++)
  {
    console.log(courses[count]);
  }
}

logCourse(myCourses);

 */







/* const player = "Per";
const opponent = "Nick";
const game = "AmzaingFighter";
let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
// hasWon = true;

// ANNOUNCING THE WINNER
if(hasWon){
  console.log(`${player} got ${points} points and won the ${game} game!"`);
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game!`);
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes */
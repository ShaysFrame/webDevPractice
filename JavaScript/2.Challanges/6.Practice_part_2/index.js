















/*
 let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function gameHand()
// {
//   let randomItem = Math.floor(Math.random() * 3);
  
//   console.log(hands[randomItem]);
// }

// gameHand();

function getHand()
{
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(getHand());

 */







/* let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 && weekday === "Friday")
{
  console.log("😱")
}
 */








/* 
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

console.log(largeCountries)
largeCountries.pop();
console.log(largeCountries);
largeCountries.push("Pakisthan");
console.log(largeCountries);

largeCountries.shift();
console.log(largeCountries);
largeCountries.unshift("China");
console.log(largeCountries); 
*/

















// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan
// */

// console.log("The 5 Largest countries in the world:");
// for(let counter = 0; counter < largeCountries.length; counter++)
// {
//   console.log("- "+ largeCountries[counter])
// }
















/* let age = 67;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if(age < 6){
  console.log("Free");
}
else if(age >= 6 && age <= 17)
{
  console.log("Child discount");
}
else if(age >= 18 && age <=26)
{
  console.log("Student's discount")
}
else if(age >= 27 && age <= 66)
{
  console.log("Full price");
}
else 
{
  console.log("Senior citizen discount")
}
 */














/* // Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: "Shay",
  age: 26,
  county: "Yangzhou",
}

function logData(){
  console.log(person.name+" is "+person.age+" years old and lives in "+person.county+".");
}

logData(); */
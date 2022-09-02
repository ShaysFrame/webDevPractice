// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEL = document.getElementById("welcome-el");
let name = "Akash Shaykh";
let greeting = "Welcome back ";

welcomeEL.innerText = greeting + name +"!"

// RULE: Can't modify code above 

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEL.innerText += "👋"

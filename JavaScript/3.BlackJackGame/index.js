let player = {
  name: "Per",
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name +": $"+player.chips;

function getRandomCard(){
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
  
























//////// Methods on objects
/* let player = {
  name: "Per",
  chips: 200,
  sayHello: function(){
    console.log("Heisann!");
  }
};

player.sayHello();

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name +": $"+player.chips;

function getRandomCard(){
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
   */



  
 

   


  

  
  
    


 

/* // 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
  name: "Per",
  chips: 200
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name +": $"+player.chips;

function getRandomCard(){
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
} */



















/* let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Object sneak peek
let player = {
  name: "Per",
  chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

function getRandomCard(){
  // IF 1     -> return 11
  // IF 11-13 -> return 10
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
} */



















/* let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(cards);

function getRandomCard(){
  // IF 1     -> return 11
  // IF 11-13 -> return 10
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if(isAlive === true && hasBlackJack === false)
  {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
} */





















/* let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(cards);

function getRandomCard(){
  // IF 1     -> return 11
  // IF 11-13 -> return 10
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
 */



















/* let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
  // IF 1     -> return 11
  // IF 11-13 -> return 10
  let randomCard = Math.floor((Math.random()*13)+1);
  
  console.log("Random Card = "+ randomCard)

  if(randomCard === 1){
    return 11;
  }
  else if (randomCard > 10)
  {
    return 10;
  }
  else {
    return randomCard;
  }
}


function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
 */

















/* let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Make this function to return a random number between 1 and 13
function getRandomCard(){
  let randomCard = Math.floor((Math.random()*13)+1);
  return randomCard;
}


function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
} */



















/* // 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
  return 5;
}


function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
} */




















/* let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard(), that always retruns the number 5!?


function startGame()
{
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let count = 0; count < cards.length; count++)
  {
    cardsEl.textContent += cards[count] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(sum);
}

function newCard()
{
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  renderGame();
  console.log(cards);
}
 */

















/* let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame()
{
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let count = 0; count < cards.length; count++)
  {
    cardsEl.textContent += cards[count] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(sum);
}

function newCard()
{
  messageEl.textContent = "Drawing a new card from the deck!"
  let newCard = 6;
  sum += newCard;
  cards.push(newCard);
  renderGame();
  console.log(cards);
} */



















/* let firstCard = 10;
let secondCard = 4;
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame()
{
  renderGame();
}

function renderGame() {
  // 2. Refer to the cards array when rendering out the cards
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(sum);
}

function newCard()
{
  messageEl.textContent = "Drawing a new card from the deck!"
  let newCard = 6;
  sum += newCard;
  // Push the card to the cards array
  cards.push(newCard);
  renderGame();
  console.log(cards);
} */


















/* let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame()
{
  renderGame();
}

function renderGame() {
  // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
  // render out ALL the cards we have.
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(sum);
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard()
{
  messageEl.textContent = "Drawing a new card from the deck!"
  console.log("Drawing a new card from the deck!")
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let newCard = 3;
    
  // 2. Add the new card to the sum variable
  sum += newCard;
  // 3. Call startGame()
  renderGame();
  console.log(sum);
}
 */



















/* let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() 
{
  cardsEl.textContent = "Cards: "+ firstCard + " " + secondCard;
  sumEl.textContent = "Sum: "+sum;
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
  } else {
      message = "You're out of the game!";
      isAlive = false;
  }
  messageEl.textContent = message;
} */



















/* let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
//  let sumEl = document.querySelector(".sum-el"); // if sum-el is a class
//  let sumEl = document.querySelector("body");  // this selects the whole body and replaces the whole body with sum: some number hhh
function startGame() 
{
  // 3. Render the sum on the page using this format -> "Sum: 14"
  sumEl.textContent = "Sum: "+sum;
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
  } else {
      message = "You're out of the game!";
      isAlive = false;
  }
  messageEl.textContent = message;
}
 */










/* let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

function startGame() 
{
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "You've got Blackjack!";
      hasBlackJack = true;
  } else {
      message = "You're out of the game!";
      isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
} */











/* let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() 
{
  if (sum <= 20) {
      message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack! 🥳";
      hasBlackJack = true;
  } else {
      message = "You're out of the game! 😭";
      isAlive = false;
  }
  console.log(message);
}
 */
















/* let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 0;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let message = " ";

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20)
{
  message = "Do you want to draw a new card? 🙂";
}
else if(sum === 21)
{
  message = "Wohoo! You've got BlackJack! 🥳";
  hasBlackJack = true;
}
else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

// 3. Log it out
console.log(message);
console.log(hasBlackJack);
console.log(isAlive);
 */












/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive) */


















/* let firstCard = 10
let secondCard = 12;
let sum = firstCard + secondCard;
let hasBlackJack = false;
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
// 2. Flip its value to false in the appropriate code block 
if (sum <= 20)
{
  console.log("Do you want to draw a new card? 🙂");
  isAlive;
}
else if(sum === 21)
{
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
}
else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// 3. Log it out to check that you're doing it right
console.log("Win BlackJack: "+hasBlackJack);
console.log("Alive Status: "+isAlive);
 */















/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false;

if (sum <= 20)
{
  console.log("Do you want to draw a new card? 🙂")
}
else if(sum === 21)
{
  console.log("Wohoo! You've got Blackjack! 🥳")
  hasBlackJack = true;
}
else {
  console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack);
 */









/* 
let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20)
{
  console.log("Do you want to draw a new card? 🙂")
}
else if(sum === 21)
{
  console.log("Wohoo! You've got Blackjack! 🥳")
}
else {
  console.log("You're out of the game! 😭")
}

 */





/* // 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10;
let secondCard = 11;

let sum = firstCard+secondCard;

console.log(sum)

if (sum < 21)
{
  console.log("Do you want to draw a new card? 🙂");
}
else if (sum === 21) // why not ==?
{
  console.log("Wohoo! You've got Blackjack! 🥳");
}
else 
{
  console.log ("You're out of the game! 😭")
} */
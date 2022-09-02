let fruit = ["🍎", "🍊", "🍎", "🍎","🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and a textContent property.

function sortFruits(){
  for (let counter = 0; counter < fruit.length; counter++)
  {
    if (fruit[counter] === "🍎")
    {
      appleShelf.textContent += fruit[counter];
    }
    else if (fruit[counter] === "🍊")
    {
      orangeShelf.textContent += fruit[counter];
    }
  }
}

sortFruits();
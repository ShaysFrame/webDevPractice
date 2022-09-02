let sentence = ["Hello", "my", "name", "is", "Per", "."] 
let greetingEl = document.getElementById("greeting-el")


// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let count = 0; count < sentence.length; count++)
{
  greetingEl.textContent += sentence[count];
  
  if (count !== sentence.length-2)
  {
    greetingEl.textContent += " ";
  }
}



















/* let cards = [7, 3, 9]

for (let count = 0; count < cards.length; count++)
{
  console.log(cards[count]);
}


let message = 
[
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
  "🙌"
]

for (let count = 0; count < message.length; count++)
{
  console.log(message[count]);
}
 */



















/* for (let i = 0; i < 6; i += 1) {
  console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let count = 10; count < 101; count += 10)
{
  console.log(count);
}
 */

















/* // Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 2 )  {
    
  console.log(count)

}
 */
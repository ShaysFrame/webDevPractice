// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100)
{
  console.log("Not elegible");
}
else if (age === 100) //is strict, == is less strict, == ignores if it's a string or number and converts string into number for example if we wrote age == "100" enven though "100" is a string it'd still give us the write answer.
{
  console.log("Here is your birthday card from the King!");
}
else
{
  console.log("Not elegible, you have already gotten one");
}










/* // Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 20;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


if (age < 21)
{
  console.log("You can not enter the club!")
} 
else 
{
  console.log("Welcome!");
} */
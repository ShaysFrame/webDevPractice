const credits = 12;

if (credits)
{
  console.log("Let's play 🎰");
}
else 
{
  console.log("Sorry, you've no credits 😭");
}

// Truthy
// falsy
  // false
  // 0
  // ""
  // null -> how you as a developer signalize emptiness
  // undefined -> how JavaScript signalizes emptiness
  // NaN


// null example
let currentViewers = null;

currentViewers = ["Jane", "Nick"];

currentViewers = [];

if (currentViewers)
{
  // do something, e.g. notify the live streamers
  console.log("We have viewers");
}

// undefined example

let undefinedCurrentViewers;
let undefinedObjectCurrentViewersObe = {};
let undefinedArrayCurrentViewersObe = ["jane"];

console.log(undefinedCurrentViewers);
console.log(undefinedObjectCurrentViewersObe.randomKey);
console.log(undefinedObjectCurrentViewersObe[5]);

let trueOrFalse = Boolean("Ah");

console.log(trueOrFalse);

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false
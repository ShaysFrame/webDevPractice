let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function(){
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random 
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

  function randomIndex(){
    return Math.floor(Math.random() * fighters.length)
  }

  let fighterOne = randomIndex();
  let fighterTwo = randomIndex();
  console.log(fighterOne+" vs "+fighterTwo);

  stageEl.textContent = fighters[fighterOne]+" VS "+ fighters[fighterTwo];
  
})


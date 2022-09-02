let hasSolved = false;
let hasHint = false;

if (hasSolved === false && hasHint === false)
{
  showSolution();
}

function showSolution()
{
  console.log("This is the solution ofr the problem...")
}












// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true )
{
    recommendMovie();   
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

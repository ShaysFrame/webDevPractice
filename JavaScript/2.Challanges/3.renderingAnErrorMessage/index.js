// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.getElementById("error");
console.log(errorParagraph);
let errorMsg = "Something went wrong, please try again";

function showError()
{
  console.log("Clicked")
  errorParagraph.textContent = errorMsg;
}
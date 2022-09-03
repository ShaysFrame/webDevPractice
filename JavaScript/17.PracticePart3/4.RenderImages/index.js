// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg"
]

const containerEl = document.getElementById("container");

function renderImages(){
  let imagePath ="";
  for(let count = 0; count < imgs.length; count++)
  {
    imagePath += `<img alt="Employee in the company" class="team-img" src="${imgs[count]}">`;
  }
  console.log(imagePath)
  containerEl.innerHTML = imagePath;
}

renderImages();
const containerEl = document.getElementById("container")

containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
  containerEl.innerHTML += "<br><p>Thank you for buying!</p>"
}













/* // Use .innerHTML to render a Buy! button inside the div container

const containerEl = document.getElementById("container")

containerEl.innerHTML = "<button>Buy!</button>" */
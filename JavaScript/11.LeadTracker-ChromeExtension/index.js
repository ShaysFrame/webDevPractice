let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if(leadsFromLocalStorage)
{
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs[0].url);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});



function render(leads)
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${leads[count]}
        </a> 
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 
});

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
})




















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{url: "https://wwww.linkedin.com/in/per-harald-borgen/"}]

tabBtn.addEventListener("click", function(){
  // Grab the URL of the current tab!
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id; // or do whatever you need
})

  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(tabs[0].url);
})



function render(leads)
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${leads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 
});

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
})
 */

















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{url: "https://wwww.linkedin.com/in/per-harald-borgen/"}]

tabBtn.addEventListener("click", function(){
  // Save the url instead of logging it out
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(tabs[0].url);
})



function render(leads)
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${leads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
}) */



















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{url: "https://wwww.linkedin.com/in/per-harald-borgen/"}]
// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
  console.log(tabs[0].url);
})



function render(leads)
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${leads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
}) */



















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads)
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${leads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
}) */





















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads)
{
  let listItems = "";
  for(let count = 0; count < leads.length; count++)
  {
    listItems += `
      <li>
        <a href="${leads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render(myLeads);
})


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});
 */





















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render();
}

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = []
  render();
})


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */


















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call render()
if(leadsFromLocalStorage)
{
  console.log("true")
  myLeads = leadsFromLocalStorage;
  render();
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */


















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage); 


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
} */




















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""; // this makes the input field empty.
  // Save the myLeads array to localStorage 
  // PS: remember JSON.stringify()

  //scrimba Solution
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

    
  // //my solution
  // myLeads = JSON.stringify(myLeads);
  // window.localStorage.setItem("myLeads", myLeads);
  // myLeads = JSON.parse(myLeads);
  
 
  render(); 

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */


















/* let myLeads = `["www.awesomelead.com"]`;
// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

myLeads = JSON.parse(myLeads);
myLeads.push("www.lead4.com");
console.log(myLeads);

myLeads = JSON.stringify(myLeads);
console.log(myLeads);



const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */



















/* const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myLeads", "www.examplelead.com");
// console.log(localStorage.getItem("myLeads"));

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
localStorage.setItem("myLeads", "wwww.example.com");
console.log(localStorage.getItem("myLeads"));
localStorage.clear();
console.log(localStorage.getItem("myLeads"));


// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings





inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */


















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "www.examplelead.com");
console.log(localStorage.getItem("myLeads"));

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
}
 */

















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    //listItems += "<li><a href='"+myLeads[count]+"' target='_blank'>"+myLeads[count]+"</a></li><br>";
    listItems += `
      <li>
        <a href="${myLeads[count]}" target="_blank">
          ${myLeads[count]}
        </a> 
      </li>
    `;
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
} */


















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  //clear out the input field
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?
    listItems += "<li><a href='"+myLeads[count]+"' target='_blank'>"+myLeads[count]+"</a></li><br>";
    console.log(listItems);
  }
  
  ulEl.innerHTML = listItems;
} */













/* 
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  //clear out the input field
  inputEl.value = "";
  render();
});


function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += "<li>"+myLeads[count]+"</li>";
    console.log(listItems)
  }
  
  ulEl.innerHTML = listItems;
}
 */


















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads); 
  // 2. Call the render() function
  render();
});

// 1. Wrap the code below in a render() function

function render()
{
  let listItems = "";
  for(let count = 0; count < myLeads.length; count++)
  {
    listItems += "<li>"+myLeads[count]+"</li>";
    console.log(listItems)
  }
  
  ulEl.innerHTML = listItems;
}
 */

















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";
for(let count = 0; count < myLeads.length; count++)
{
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  listItems += "<li>"+myLeads[count]+"</li>";
  console.log(listItems)
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
 */


















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Let's try a different method!
for(let count = 0; count < myLeads.length; count++)
{
  // ulEl.innerHTML += "<li>"+myLeads[count]+"</li>";
  // create element
  // set text content
  // append to ul
  const li = document.createElement("li");
  li.textContent = myLeads[count];
  ulEl.append(li);
}
 */



















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Replace .textContent with .innerHTML and use <li> tags
for(let count = 0; count < myLeads.length; count++)
{
  ulEl.innerHTML += "<li>"+myLeads[count]+"</li>";
}

 */


















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
for(let count = 0; count < myLeads.length; count++)
{
  // Usesage of innerHTML
  ulEl.innerHTML += "<li>"+myLeads[count]+"</li>";
  console.log(myLeads[count])
}
 */


















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
for(let count = 0; count < myLeads.length; count++)
{
  ulEl.textContent += myLeads[count]+" ";
  console.log(myLeads[count])
} */




















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

console.log(ulEl);

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for(let count = 0; count < myLeads.length; count++)
{
  console.log(myLeads[count])
}
 */



















/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop 
for(let count = 0; count < myLeads.length; count++)
{
  console.log(myLeads[count])
}
 */














/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");


inputBtn.addEventListener("click", function(){
  // Push the value from the inputEl into the myLeads array 
  // instead of the hard-coded "www.awesomeleads.com" value
  // Google -> "get value from input field javascript"

  myLeads.push(inputEl.value);
  console.log(myLeads);
});
 */



















/* let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function(){
  myLeads.push("www.awesomelead.com");

  console.log(myLeads);
}); */
























/* // Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
  console.log("Button Clicked");
}); */
















/* 
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button


let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
  console.log("Button Clicked");
});
 */

























/* let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function()
{
  console.log ("Button Clicked from event listener");
})

 */


/* 
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function saveLead()
{
  console.log("Button Clicked")
} */
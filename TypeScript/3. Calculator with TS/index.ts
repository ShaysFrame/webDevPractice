// Using typeof
/*
const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input')
const screen = document.querySelector('.screen')

function addNumber(a, b)
{
  console.log(a+b);
  screen.innerHTML = a + b;
}

button.addEventListener('click', () => addNumber(firstInput.value, firstInput.value))
*/
// while above code doesn't really work as one might want to just add two number simply and not concatanete them. the plain java way of fixing it is.

const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement;
const secondInput = document.querySelector('#second-input') as HTMLInputElement;
export const screen = document.querySelector('.screen');

function addNumber(a: number, b: number)
{  
    screen.innerHTML = (a + b).toString();
}

button.addEventListener('click', () => addNumber(parseInt(firstInput.value), parseInt(secondInput.value)))
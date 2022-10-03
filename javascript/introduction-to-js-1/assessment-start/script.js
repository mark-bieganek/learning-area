function onClick() {
  // Validate name input
  if (inputIsEmpty(customName)) {
    // No name was entered, abort and print error.
    console.log("error: name is empty");
    return;
  } else {

  }
}

function inputIsEmpty(input) {
  if (input === '') {
    return true;
  } else {
    return false;
  }
}

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

const customName = document.getElementById('customname').textContent;
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

randomize.addEventListener('click', (event) => {onClick()});
function inputIsEmpty(input) {
  input !== '' ? true : false;
}

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const inputIsValid = inputIsEmpty(customName);
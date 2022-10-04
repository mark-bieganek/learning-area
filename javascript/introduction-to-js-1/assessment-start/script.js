function onClick() {
  // Validate name input
  if (inputIsEmpty(customName.value)) {
    // No name was entered, abort and print error.
    console.log("error: name is empty");
    return;
  };

  let selectedUnit;
  for (const measurement of measurements) {
      if (measurement.checked) {
          selectedUnit = measurement.value === 'us' ? 'Fahrenheit' : 'Celsius';
          break;
      }
  }
  let temperature = 94;
  selectedUnit === 'Metric' ? temperature = convertTempTo(selectedUnit, temperature) : temperature = 94;
  // Generate a random story.
  console.log(`It was ${temperature} ${selectedUnit} outside, so ${protagonistName} went for a walk. When they got to  ${randomValueFromArray(arrPlace)} , they stared in horror for a few moments, then  ${randomValueFromArray(arrOutcome)} .  ${capitalize(customName.value)} saw the whole thing, but was not surprised — ${protagonistName} weighs 300 pounds, and it was a hot day.`);
}

function inputIsEmpty(input) {
  if (input === '') {
    return true;
  } else {
    return false;
  }
}

function capitalize(str) {
  const upperCase = str.toUpperCase();
  const lowerCase = str.toLowerCase();
  return upperCase.slice(0,1) + lowerCase.slice(1);
}

function convertTempTo(preference, temperature) {
  let newTemperature;
  // ℃=(℉-32)/1.8
  // ℉=℃*(9/5)+32
  preference === 'Celsius' ? newTemperature = (temperature-32)/1.8 : newTemperature = temperature*(9/5)+32;
  // Round the new temperature
  newTemperature = Math.round(newTemperature);
  return newTemperature;
}

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const arrName = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
]

const arrPlace = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
]

const arrOutcome = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const protagonistName = randomValueFromArray(arrName);

randomize.addEventListener('click', (event) => {onClick()});

// We need a way to detect if the user has requested Metric (UK) measurements.
const measurements = document.querySelectorAll('input[name="ukus"]');



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
          selectedUnit = measurement.value === 'us' ? 'Imperial' : 'Metric';
          break;
      }
  }
  // Define labels for temperature and weight measurements.
  let degreesType = selectedUnit === "Metric" ? "Celsius" : "Fahrenheit";
  let weightType = selectedUnit === "Metric" ? "Kilograms" : "Pounds";
  // Convert to Metric temperature if UK was selected.
  let temperature = selectedUnit === "Metric" ? convertTempTo(degreesType, 94) : 94;
  // Convert to Metric weight if UK was selected.
  let weight = selectedUnit === "Metric" ? convertWeightTo(weightType, 300) : 300;
  // Generate a random story.
  console.log(`It was ${temperature} ${degreesType} outside, so ${protagonistName} went for a walk. When they got to  ${randomValueFromArray(arrPlace)} , they stared in horror for a few moments, then  ${randomValueFromArray(arrOutcome)} .  ${capitalize(customName.value)} saw the whole thing, but was not surprised — ${protagonistName} weighs ${weight} ${weightType}, and it was a hot day.`);
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

function convertWeightTo(preference, weight) {
  let newWeight;
  // 1 lb = 0.45359237 kg
  // 1 kg = 2.2046 lbs
  preference === 'Kilograms' ? newWeight = weight*0.45359237 : newWeight = weight*2.2046;
  // Round the new temperature
  newWeight = Math.round(newWeight);
  return newWeight;
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
const measurements = document.querySelectorAll('input[name="ukus"]');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const protagonistName = randomValueFromArray(arrName);

randomize.addEventListener('click', (event) => {onClick()});



function onClick() {

  // Detect user preference: Imperial or Metric.
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

  // Assign story elements.
  let customName = document.getElementById('customname').value;
  customName = customName ? capitalize(customName) : "Bob";
  const protagonistName = randomValueFromArray(arrName);
  const place = randomValueFromArray(arrPlace);
  const outcome = randomValueFromArray(arrOutcome);

  // Generate a random story.
  const story = document.querySelector('.story');
  story.textContent = `It was ${temperature} ${degreesType} outside, so ${protagonistName} went for a walk. When they got to  ${place} , they stared in horror for a few moments, then  ${outcome} .  ${customName} saw the whole thing, but was not surprised — ${protagonistName} weighs ${weight} ${weightType}, and it was a hot day.`;
  story.style.visibility = "visible";
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

const measurements = document.querySelectorAll('input[name="ukus"]');
const randomize = document.querySelector('.randomize');
randomize.addEventListener('click', (event) => {onClick()});



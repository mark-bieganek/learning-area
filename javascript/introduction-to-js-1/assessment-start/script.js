function onClick() {

  const us = {
    measurementType: "Imperial",
    temperatureUnit: "Fahrenheit",
    weightUnit: "Pounds"
  }

  const uk = {
    measurementType: "Metric",
    temperatureUnit: "Celsius",
    weightUnit: "Kilograms"
  }

  // Detect user preference: Imperial or Metric.
  const selected = getSelectedRadioButton('ukus');
  // Load the objects relevant to the user preference.
  const preference = selected.value === 'us' ? us : uk;

  // Define default temperature and weight.
  const degreesType = preference.temperatureUnit;
  const weightType = preference.weightUnit;
  const temperature = Math.round(convertFahrenheitTo(degreesType, 94));
  const weight = Math.round(covertWeightLbsTo(weightType, 300));

  // Arrays from which to randomize the story
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

  // Assign story elements.
  // Start with the name provided by the user. If none provided, use 'Bob'.
  let customName = document.getElementById('customname').value;
  customName = customName ? capitalize(customName) : "Bob";
  // Let's randomize the story details!
  const protagonistName = getRandomArrayItem(arrName);
  const place = getRandomArrayItem(arrPlace);
  const outcome = getRandomArrayItem(arrOutcome);

  // Generate a random story.
  const story = document.querySelector('.story');
  story.textContent = `It was ${temperature} ${degreesType} outside, so ${protagonistName} went for a walk. When they got to  ${place} , they stared in horror for a few moments, then  ${outcome} .  ${customName} saw the whole thing, but was not surprised — ${protagonistName} weighs ${weight} ${weightType}, and it was a hot day.`;
  story.style.visibility = "visible";
}

function getSelectedRadioButton(inputName) {
  // This function retrieves a selected radio input by name
  const inputs = document.querySelectorAll(`input[name="${inputName}"]`);
  for (const input of inputs) {
    if (input.checked) {
      return input;
    }
  }
}

function capitalize(str) {
  // This function capitalizes a string input.
  const upperCase = str.toUpperCase();
  const lowerCase = str.toLowerCase();
  return upperCase.slice(0,1) + lowerCase.slice(1);
}

function convertFahrenheitTo(convertToUnit = 'fahrenheit', tempIn) {
  // This function converts a temperature in ℉ to another measurement system.
  // Usage example: convertFahrenheitTo('Celsius', 94)
  const map1 = new Map();
  // Define the formulas for conversion.
  map1.set('fahrenheit', tempIn); // Default
  map1.set('celsius', (tempIn-32)/1.8);
  map1.set('kelvin', ((tempIn-32)/1.8)+273.15);
  // Perform the conversion.
  return map1.get(convertToUnit.toLowerCase());
}

function covertWeightLbsTo(convertToUnit = 'pounds', weightIn) {
  // This function converts a weight in Lbs to another measurement system.
  // Usage example: covertWeightLbsTo('Kilograms', 164)
  const map1 = new Map();
  // Define the formulas for conversion.
  map1.set('pounds', weightIn); // Default
  map1.set('kilograms', weightIn / 2.2046);
  map1.set('grams', weightIn / 0.0022046);
  map1.set('ounces', weightIn * 16);
  // Perform the conversion.
  return map1.get(convertToUnit.toLowerCase());
}

function getRandomArrayItem(array) {
  // This function retrieves a random value from a provided array.
  return array[getRandomNumber(0, array.length)];
}

function getRandomNumber(min = 0, max) {
  // This function returns a random number within a range
  // min is optional with 0 used as default.
  return Math.floor(Math.random() * max) + min;
}

// Script will fire if the user clicks the 'Generate random story' button.
document.getElementById('randomize').addEventListener('click', onClick);
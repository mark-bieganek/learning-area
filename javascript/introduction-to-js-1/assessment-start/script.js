function onClick() {

  // Detect user preference: Imperial or Metric.
  const measurements = document.querySelectorAll('input[name="ukus"]');
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
  let temperature = selectedUnit === "Metric" ? convertFahrenheitTo(degreesType, 94) : 94;
  // Convert to Metric weight if UK was selected.
  let weight = selectedUnit === "Metric" ? convertLbsTo(weightType, 300) : 300;

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
  const protagonistName = randomArrayItem(arrName);
  const place = randomArrayItem(arrPlace);
  const outcome = randomArrayItem(arrOutcome);

  // Generate a random story.
  const story = document.querySelector('.story');
  story.textContent = `It was ${temperature} ${degreesType} outside, so ${protagonistName} went for a walk. When they got to  ${place} , they stared in horror for a few moments, then  ${outcome} .  ${customName} saw the whole thing, but was not surprised — ${protagonistName} weighs ${weight} ${weightType}, and it was a hot day.`;
  story.style.visibility = "visible";
}

function capitalize(str) {
  // This function capitalizes a string input.
  const upperCase = str.toUpperCase();
  const lowerCase = str.toLowerCase();
  return upperCase.slice(0,1) + lowerCase.slice(1);
}

function convertFahrenheitTo(convertToUnit, tempIn) {
  // This function converts a temperature in ℉ to another measurement system.
  // Usage example: convertFahrenheitTo('Celsius', 94)
  let tempOut;
  // Define the formulas for conversion.
  const map1 = new Map();
  map1.set('celsius', (tempIn-32)/1.8);
  map1.set('kelvin', ((tempIn-32)/1.8)+273.15);
  // Perform the conversion.
  tempOut = map1.get(convertToUnit.toLowerCase());
  // Round the output.
  tempOut = Math.round(tempOut);
  return tempOut;
}

function convertLbsTo(convertToUnit, weightIn) {
  // This function converts a weight in Lbs to another measurement system.
  // Usage example: convertLbsTo('Kilograms', 164)
  let weightOut;
  const map1 = new Map();
  // Define the formulas for conversion.
  map1.set('kilograms', weightIn / 2.2046);
  map1.set('grams', weightIn / 0.0022046);
  map1.set('oz', weightIn * 16);
  // Perform the conversion.
  weightOut = map1.get(convertToUnit.toLowerCase());
  // Round the output.
  weightOut = Math.round(weightOut);
  return weightOut;
}

function randomArrayItem(array){
  // This function retrieves a random value from a provided array.
  return array[random(array.length)];
}

function random(max, min) {
  // This function returns a random number within a range
  // min is optional with 0 used as default.
  const rangeMin = typeof min !== 'undefined' ? min : 0;
  return Math.floor(Math.random() * max) + rangeMin;
}

// Script will fire if the user clicks the 'Generate random story' button.
document.querySelector('.randomize').addEventListener('click', (event) => {onClick()});



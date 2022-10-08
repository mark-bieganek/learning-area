function randomStory(countryCode = 'US', observerName = 'Bob', temperature = 94, weight = 300) {
  const US = {
    measurementType: "Imperial",
    temperature: {
      unit: "Fahrenheit",
      reading: temperature
    },
    weight: {
      unit: "Pounds",
      reading: weight
    }
  }

  const UK = {
    measurementType: "Metric",
    temperature: {
      unit: "Celsius",
      _reading: temperature,
      get reading() {
        return Math.round(fahrenheitToCelsius(this._reading))
      }
    },
    weight: {
      unit: "Kilograms",
      _reading: weight,
      get reading() {
        return Math.round(poundsToKilograms(this._reading))
      }
    }
  }

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

  
  // Load the objects relevant to the user preference.
  const preference = countryCode.toUpperCase() === 'US' ? US : UK;
  // Let's randomize the story details!
  const protagonistName = getRandomArrayItem(arrName);
  const place = getRandomArrayItem(arrPlace);
  const outcome = getRandomArrayItem(arrOutcome);

  // Return a random story.
  return `It was ${preference.temperature.reading} ${preference.temperature.unit} outside, so ${protagonistName} went for a walk. When they got to  ${place} , they stared in horror for a few moments, then  ${outcome}. ${capitalize(observerName)} saw the whole thing, but was not surprised — ${protagonistName} weighs ${preference.weight.reading} ${preference.weight.unit}, and it was a hot day.`;
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

function fahrenheitToCelsius(reading) {
  return ((reading-32)/1.8);
}

function fahrenheitToKelvin(reading) {
  return (((reading-32)/1.8)+273.15);
}

function poundsToKilograms(reading) {
  return (reading / 2.2046);
}

function poundsToGrams(reading) {
  return (reading / 0.0022046);
}

function poundsToOunces(reading) {
  return (reading * 16);
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
document.getElementById('randomize').addEventListener('click', () => {
    // Assign story elements.
    // Start with the name provided by the user. If none provided, use 'Bob'.
    let customName = document.getElementById('customname').value;
    customName = customName ? capitalize(customName) : "Bob";  
    // Detect user preference: Imperial or Metric.
    const selectedCountry = getSelectedRadioButton('ukus').value;
    // Build and output the story.
    const story = document.querySelector('.story');
    story.textContent = randomStory(selectedCountry, customName);
    story.style.visibility = "visible";
  }
)

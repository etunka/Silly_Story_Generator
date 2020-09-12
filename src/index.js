const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const actions = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

randomize.addEventListener("click", result);

function result() {
  story.textContent = createStory(characters, places, actions);
  story.style.visibility = "visible";
}

function createStory(xArray, yArray, zArray) {
  const name = customName.value !== "" ? customName.value : "Bob";
  const xItem = randomValueFromArray(xArray);
  const yItem = randomValueFromArray(yArray);
  const zItem = randomValueFromArray(zArray);
  const units = getUnits(94, 300);

  return `It was ${units.temperature} outside, so ${xItem} went for a walk. 
  When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. 
  ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${units.weight}, 
  and it was a hot day.`;
}

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function getUnits(temperature, weight) {
  const units = {
    temperature: `${temperature} fahrenheit`,
    weight: `${weight} pounds`
  };
  if (document.getElementById("uk").checked) {
    units.weight = `${Math.round(300 * 0.071429)} stone`;
    units.temperature = `${Math.round((94 - 32) / 1.8)} centigrade`;
  }
  return units;
}

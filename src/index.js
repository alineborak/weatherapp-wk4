let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// Homework week 4 - Part 1
let now = new Date();
console.log(now.getDate());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);

let hour = now.getHours();
console.log(hour);

let minutes = now.getMinutes();
console.log(minutes);

let time = document.querySelector("#day-time");
time.innerHTML = `${day} ${hour}:${minutes}`;

// Part 2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let searchEng = document.querySelector("#city-display");
  searchEng.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// Part 3
// #celsius-link
// #farenheit-link
// #temperature

let farenheit = document.querySelector("#temperature");
farenheit.innerHTML = "66";

function changeTemperature(event) {
  event.preventDefault();
  let clickFarenheit = document.querySelector("#farenheit-link");
  clickFarenheit.innerHTML = `${farenheit}`;
}
let change = document.querySelector("#temperature");
change.addEventListener("submit", changeTemperature);

// let popUp = prompt("Please enter a city:");
// popUp = popUp.toLowerCase();
// if (weather[popUp]) {
//   alert(
//     `It is currently ${Math.round(weather[popUp].temp)} °C in ${popUp} with ${
//       weather[popUp].humidity
//     } of humidity`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${popUp}`
//   );
// }

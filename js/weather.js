const WEATHER_API_KEY = "e9e1e7536a783045ef01ea994068798b";
const $weatherIcon = document.querySelector("#weatherIcon");
const $weatherTemp = document.querySelector("#weatherTemp");
const $weather = document.querySelector(".weather");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in : ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      $weather.style.display = "flex";
      $weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">`;
      $weatherTemp.innerText = `${data.main.temp.toFixed(1)}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
  $weather.style.display = "none";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

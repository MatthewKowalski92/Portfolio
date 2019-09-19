const body = document.querySelector("body");

const header = document.querySelector("header");

const footer = document.querySelector("footer");

const toggle = document.querySelector(".toggle-background");

const weather = document.querySelector(".weather");

const elements = [header, footer];

const toggleBackground = () => {
  if (body.classList.contains("background-white")) {
    body.classList.remove("background-white");
    body.classList.add("background-dark");
    elements.forEach(element => {
      element.classList.remove("background-blue");
      element.classList.add("background-yellow");
    });
  } else {
    body.classList.remove("background-dark");
    body.classList.add("background-white");
    elements.forEach(element => {
      element.classList.remove("background-yellow");
      element.classList.add("background-blue");
    });
  }
};

toggle.addEventListener("click", toggleBackground);

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Koszalin,PL&appid=ea8af768de152c2a5f81994594a71be8&units=metric`
)
  .then(response => response.json())
  .then(
    result =>
      (weather.innerHTML = `Weather in ${result.name}, ${
        result.sys.country
      } of ${new Date().toLocaleDateString()}
  <div class="weather-conditions">
  <img src="http://openweathermap.org/img/w/${result.weather[0].icon}.png">
  <span>Temperature: ${result.main.temp}&#8451;</span><span>Pressure: ${
        result.main.pressure
      }kPa;</span></div>`)
  );

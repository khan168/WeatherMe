// import * as dotenv from "dotenv";
// dotenv.config();

//steps to complete
/*
1.create module pattern instead of weather obj [done] 
2.create a display module - follow solid principle 
3.async await instead of chained .then 

issues: 1.can't apply css-> completes ui 2. how to use .env files with webpack-> publishable
*/

const weather_module =(()=>{
  const key= process.env.API_KEY
  const fetchweather=function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        "796dbbd05685c48b6c4f0325e40936b4" +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const displayWeather= function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + " ° C";
    document.querySelector(".wind").innerText =
      "Wind Speed " + speed + " Km/hr";
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
  }
  const search=function () {
    fetchweather(document.querySelector(".search-bar").value);
  }
  return {
    search,fetchweather
  }
})();




document.querySelector(".search button").addEventListener("click", function () {
  weather_module.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather_module.search();
    }
  });

weather_module.fetchweather("denver");

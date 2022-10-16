console.log("working");
let Weather = {
  APIkey: "APIkey",
  fetchweather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.APIkey +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayWeather(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + " ° C";
    document.querySelector(".wind").innerText ="Wind Speed " + speed + " Km/hr";
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + ".png";
},
  search: function () {
    this.fetchweather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  Weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    Weather.search();
    }
  });

Weather.fetchweather("denver");
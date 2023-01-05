
//steps to complete
/*
1.create module pattern instead of weather obj [done] 
2.create a display module - follow solid principle [can't without npm]
3.async await instead of chained .then 
*/


const weather_module =(()=>{
  const fetchweather=async function (city) {
    try{
    const response=await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        "ENTER KEY HERE"+
        "&units=metric"
    )
    const data = await response.json();
    displayWeather(data);
  }catch(err){
    console.log(err);
  }
  }
  const displayWeather= async function (data) {
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
  const search=async function () {
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

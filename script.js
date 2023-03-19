var city;
var urlUnits = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric";
var weather = {
    "apiKey": "586ae82c4371851edd7b4bc796dc1a7b",
    fetchWeather: function(city) {
         fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=imperial")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText="Weather in " + name; 
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
        document.querySelector(".humidity").innerText="Humidity:" + humidity + "%"; 
        document.querySelector(".wind").innerText=speed; 
        document.querySelector(".description").innerText=description;
        document.querySelector(".temperature").innerText= temp + "°" +"F"; 

    },
    searchCity : function() {
        this.fetchWeather(document.querySelector(".searchBar").value)
    }
    
};

document.querySelector(".searchButton").addEventListener("click", function() {
    weather.searchCity();

})
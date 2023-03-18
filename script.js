var city;
var weather = {
    "apiKey": "586ae82c4371851edd7b4bc796dc1a7b",
    fetchWeather: function(city) {
        // fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=586ae82c4371851edd7b4bc796dc1a7b")
         fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector("h2").innerText="Weather in " + name; 


    }
    
};
var city;
const weather = {
    "apiKey": "586ae82c4371851edd7b4bc796dc1a7b",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + this.apiKey + "&units=imperial")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const { name } = data.city;
        const { icon, description } = data.list[0].weather[0];
        const { temp, humidity } = data.list[0].main;
        const { speed } = data.list[0].wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Current Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "MPH";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°F";

        let day1Ele = document.querySelector(".day-1");
        day1Ele.querySelector('.dayDisplay').textContent = dayjs().add(1, 'day').format("DD MMM YYYY");
        day1Ele.querySelector('.tempDisplay').textContent = data.list[1].main.temp + "°F";
        day1Ele.querySelector('.descDisplay').textContent = data.list[1].weather[0].description;
        day1Ele.querySelector('.humidityDisplay').textContent = "Humidity: " + data.list[1].main.humidity + "%";
        day1Ele.querySelector(".windDisplay").textContent = "Wind Speed: " + speed + "MPH";
        day1Ele.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png";

        let day2Ele = document.querySelector(".day-2");
        day2Ele.querySelector('.dayDisplay').textContent = dayjs().add(2, 'day').format("DD MMM YYYY");
        day2Ele.querySelector('.tempDisplay').textContent = data.list[2].main.temp + "°F";
        day2Ele.querySelector('.humidityDisplay').textContent = "Humidity: " + data.list[2].main.humidity + "%";
        day2Ele.querySelector(".windDisplay").textContent = "Wind Speed: " + speed + "MPH";
        day2Ele.querySelector('.descDisplay').textContent = data.list[2].weather[0].description;
        day2Ele.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png";

        let day3Ele = document.querySelector(".day-3");
        day3Ele.querySelector('.dayDisplay').textContent = dayjs().add(3, 'day').format("DD MMM YYYY");
        day3Ele.querySelector('.tempDisplay').textContent = data.list[3].main.temp + "°F";
        day3Ele.querySelector('.humidityDisplay').textContent = "Humidity: " + data.list[3].main.humidity + "%";
        day3Ele.querySelector(".windDisplay").textContent = "Wind Speed: " + speed + "MPH";
        day3Ele.querySelector('.descDisplay').textContent = data.list[3].weather[0].description;
        day3Ele.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png";

        let day4Ele = document.querySelector(".day-4");
        day4Ele.querySelector('.dayDisplay').textContent = dayjs().add(4, 'day').format("DD MMM YYYY");
        day4Ele.querySelector('.tempDisplay').textContent = data.list[4].main.temp + "°F";
        day4Ele.querySelector('.humidityDisplay').textContent = "Humidity: " + data.list[4].main.humidity + "%";
        day4Ele.querySelector(".windDisplay").textContent = "Wind Speed: " + speed + "MPH";
        day4Ele.querySelector('.descDisplay').textContent = data.list[4].weather[0].description;
        day4Ele.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png";

    },

    searchCity: function (city) {
        this.fetchWeather(city)
    }

};
function displayCity() {
    let cities = JSON.parse(window.localStorage.getItem('cities'));
    if (cities == null)
        cities = [];
    for (let i = 0; i < cities.length; i++) {
        $(".listCities").append('<ul><a href="#" class="citiItem">' + cities[i] + '</a></ul>');
    }
}

$("document").ready(function () {

    document.querySelector(".btn").addEventListener("click", function () {
        var cityName = document.querySelector(".searchBar").value;
        weather.searchCity(cityName);
        let cities = JSON.parse(window.localStorage.getItem('cities'));
        if (cities == null)
            cities = [];
        cities.push(cityName);
        $(".listCities").append('<ul><a href="#" class="citiItem">' + cityName + '</a></ul>');
        localStorage.setItem('cities', JSON.stringify(cities));
        document.querySelector(".searchBar").value = "";

    });

    displayCity();

    $(document).on('click', '.citiItem', function (e) {
        e.preventDefault();
        weather.searchCity($(this).text());
    });

    document.querySelector(".btn-flat").addEventListener("click", function () {
        document.querySelector(".listCities").textContent = "";

    });

    document.querySelector(".currentDay").textContent = dayjs().format("DD MMM YYYY");

    $(".wrap").addClass("hoverable");
    $(".card").addClass("pulse");
    // $("h5").addClass("material-icons history");
    
});

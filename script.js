// window.onload = $(function () {
    
    var city;
    // var urlUnits = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric";
    const weather = {
        "apiKey": "586ae82c4371851edd7b4bc796dc1a7b",
        fetchWeather: function (city) {
            fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + this.apiKey + "&units=imperial")
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));

        },
        displayWeather: function (data) {
            const { name } = data.city;
            const { icon, description } = data.list[0].weather[0];
            const { temp, humidity } = data.list[0].main;
            const { speed } = data.list[0].wind;
            console.log(name, icon, description, temp, humidity, speed);
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
            document.querySelector(".wind").innerText = speed;
            document.querySelector(".description").innerText = description;
            document.querySelector(".temperature").innerText = temp + "°" + "F";

            let day1Ele =document.querySelector(".day-1");
            day1Ele.querySelector('.dayDisplay').textContent=  dayjs().add(1, 'day').format("DD MMM YYYY");;
            day1Ele.querySelector('.tempDisplay').textContent= "Temperature: "+ data.list[1].main.temp;
            day1Ele.querySelector('.humidityDisplay').textContent= "Humidity: " +  data.list[1].main.humidity + "%";
            day1Ele.querySelector('.descDisplay').textContent= "Description: "+ data.list[1].weather[0].description;
            day1Ele.querySelector('.icon').src =  "https://openweathermap.org/img/wn/" +  data.list[1].weather[0].icon + "@2x.png";

            let day2Ele =document.querySelector(".day-2");
            day2Ele.querySelector('.dayDisplay').textContent=  dayjs().add(2, 'day').format("DD MMM YYYY");;
            day2Ele.querySelector('.tempDisplay').textContent= "Temperature: "+ data.list[2].main.temp;
            day2Ele.querySelector('.humidityDisplay').textContent= "Humidity: " +  data.list[2].main.humidity + "%";
            day2Ele.querySelector('.descDisplay').textContent= "Description: "+ data.list[2].weather[0].description;
            day2Ele.querySelector('.icon').src =  "https://openweathermap.org/img/wn/" +  data.list[2].weather[0].icon + "@2x.png";

            let day3Ele =document.querySelector(".day-3");
            day3Ele.querySelector('.dayDisplay').textContent=  dayjs().add(3, 'day').format("DD MMM YYYY");;
            day3Ele.querySelector('.tempDisplay').textContent= "Temperature: "+ data.list[3].main.temp;
            day3Ele.querySelector('.humidityDisplay').textContent= "Humidity: " +  data.list[3].main.humidity + "%";
            day3Ele.querySelector('.descDisplay').textContent= "Description: "+ data.list[3].weather[0].description;
            day3Ele.querySelector('.icon').src =  "https://openweathermap.org/img/wn/" +  data.list[3].weather[0].icon + "@2x.png";

            let day4Ele =document.querySelector(".day-4");
            day4Ele.querySelector('.dayDisplay').textContent=  dayjs().add(4, 'day').format("DD MMM YYYY");;
            day4Ele.querySelector('.tempDisplay').textContent= "Temperature: "+ data.list[4].main.temp;
            day4Ele.querySelector('.humidityDisplay').textContent= "Humidity: " +  data.list[4].main.humidity + "%";
            day4Ele.querySelector('.descDisplay').textContent= "Description: "+ data.list[4].weather[0].description;
            day4Ele.querySelector('.icon').src =  "https://openweathermap.org/img/wn/" +  data.list[4].weather[0].icon + "@2x.png";


            
        },
        searchCity: function (city) {
            this.fetchWeather(city)
        }

    };
    function displayCity(){
        let cities = JSON.parse(window.localStorage.getItem('cities'));
        if(cities == null) 
            cities= [];
        for(let i = 0; i < cities.length; i++){
            $(".listCities").append('<li><a href="#" class="citiItem">'+cities[i]+'</a></li>')
        }
    }
    $("document").ready(function() {

    document.querySelector(".searchButton").addEventListener("click", function () {
        var cityName =  document.querySelector(".searchBar").value;
        weather.searchCity( cityName);
        let cities = JSON.parse(window.localStorage.getItem('cities'));
        if(cities == null) 
            cities= [];
        cities.push( cityName)   ;
        $(".listCities").append('<li><a href="#" class="citiItem">'+cityName+'</a></li>')
        localStorage.setItem('cities',JSON.stringify(cities));
        document.querySelector(".searchBar").value = "";


    });
    displayCity();
    $(document).on('click','.citiItem',function(e){
        e.preventDefault();
        weather.searchCity( $(this).text());
    })
    document.querySelector(".currentDay").textContent =dayjs().format("DD MMM YYYY");
   
   // document.querySelector(".day-1").textContent = dayjs().add(1, 'day').format("DD MMM YYYY");
    //document.querySelector(".day-2").textContent = dayjs().add(2, 'day').format("DD MMM YYYY");
    //document.querySelector(".day-3").textContent = dayjs().add(3, 'day').format("DD MMM YYYY");
   // document.querySelector(".day-4").textContent = dayjs().add(4, 'day').format("DD MMM YYYY");
   // document.querySelector(".day-5").textContent = dayjs().add(5, 'day').format("DD MMM YYYY");
});

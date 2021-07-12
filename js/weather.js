const API_KEY = "01ac6c859ac46e5c141e8f2d0f983ccd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `Weather : ${data.weather[0].main} 
                Temperatures : ${data.main.temp} ℃`;
        });
}

function onGeoError() {
    alert("Can't fin you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "7b38f927fa767d459ddde49a6c1abf06";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = ` \n Location : ${data.name}`;
            weather.innerText =
                `Weather : ${ data.weather[0].main } 
            ❕ ${data.main.temp} C`;
        });
}

function onGeoError() {
    alert("Can't find you. No weahter for your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// user의 위치를 만들기
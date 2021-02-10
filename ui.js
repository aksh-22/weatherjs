class UI {
    constructor() {
        // grabing the all elements
        this.location = document.getElementById('w-location');
        this.location2 = document.getElementById('w-location2');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather1) {
        // setting the value of each element
        this.location.textContent = `${weather1.name}, ${weather1.sys.country}`;
        // console.log(weather1.weather[0].description);
        this.desc.textContent = weather1.weather[0].description;
        // converting the temp from kalvin to F the C
        const tempInK = weather1.main.temp;
        const tempInF = Math.round(((tempInK - 273.15) * 1.8) + 32);
        const tempInC = Math.round((5 / 9) * (tempInF - 32));
        this.string.textContent = `${tempInF} °F (${tempInC} °C)`;
        this.icon.setAttribute('src', weather1.icon_url);
        this.humidity.textContent = `Relative Humidity: ${weather1.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather1.main.feels_like}`;
        this.dewpoint.textContent = `Pressure: ${weather1.main.pressure}`;
        this.wind.textContent = `Wind: ${weather1.wind.speed}`;
    }
}

// // {
//     "coord": {
//         "lon": -0.13,
//         "lat": 51.51
//     },
//     "weather": [{
//         "id": 802,
//         "main": "Clouds",
//         "description": "scattered clouds",
//         "icon": "03n"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 277.43,
//         "feels_like": 271.49,
//         "temp_min": 276.15,
//         "temp_max": 278.71,
//         "pressure": 1025,
//         "humidity": 75
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.7,
//         "deg": 30
//     },
//     "clouds": {
//         "all": 29
//     },
//     "dt": 1585369753,
//     "sys": {
//         "type": 1,
//         "id": 1502,
//         "country": "GB",
//         "sunrise": 1585374241,
//         "sunset": 1585420001
//     },
//     "timezone": 0,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
// }
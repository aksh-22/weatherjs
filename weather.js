// getting the weather from the api

class Weather {
    constructor(city, countary) {
        // storing the key city and countary
        this.key = '769f62c24619cd4bb4281789b691c767';
        this.city = city;
        this.countary = countary;
    };

    async getWeather() {
        // taking and storing the data from api
        const reponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countary}&appid=${this.key}`);
        // convering the data into json format 
        const reponseData = await reponse.json();
        // returing the data 
        return reponseData
    }

    changeLocation(city, countary) {
        console.log(city)
        console.log(countary);
        // to update the value of city and countary
        this.city = city;
        this.countary = countary;
    }
}
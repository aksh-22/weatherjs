// init the classes
// storage classes
const Storage = new storage();
// getting the data from the storage
const weatherLocation = Storage.getLocationData();

// weather class
const Weathers = new Weather(weatherLocation.city, weatherLocation.countary);

// UI class
const ui = new UI();

// listening to the events 
// for reload  
document.addEventListener('DOMContentLoaded', getweather);
// for click
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    // storing the value of city and countary
    const city = document.querySelector('#city').value;
    const countary = document.querySelector('#state').value;
    // changing the location
    Weathers.changeLocation(city, countary);
    // getting the weather
    getweather();
    // closing the modal
    $('#locModal').modal('hide');
});

// defing the function to get the weather
function getweather() {
    Weathers.getWeather()
        .then(results => {
            ui.paint(results);
            // console.log(results);
        })
        .catch(err => console.log(err));
    // console.log(x);
}
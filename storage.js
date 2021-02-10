class storage {
    constructor() {
        this.city;
        this.countary;
        this.defaultCity = 'jaipur';
        this.defaultCountary = 'india';
    }

    getLocationData() {
        // validating
        //for city
        if (localStorage.getItem('city') === null) {
            // setting the default value of city in begining
            this.city = this.defaultCity;
        } else {
            // getting the value from local storage
            this.city = localStorage.getItem('city');
        }
        // for countary
        if (localStorage.getItem('countary') === null) {
            this.city = this.defaultCountary;
        } else {
            this.city = localStorage.getItem('countary');
        }
        // returning the values
        return {
            city: this.city,
            countary: this.countary
        }
    }

    // setting the data to local storage
    setLocationData(city, countary) {
        localStorage.setItem('city', city);
        localStorage.setItem('countary', countary);
    }
}
class Weather {
  constructor(city, country) {
    this.apiKey = "";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const data = response.json();

    return data;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

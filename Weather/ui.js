class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.icon = document.getElementById("w-icon");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name},${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.ceil(weather.main.temp) - 273} C`;
    this.humidity.textContent = `Humidity:${weather.main.humidity}`;
    this.feelslike.textContent = `Feels Like:${Math.ceil(
      weather.main.feels_like
    ) - 273} C`;
    this.wind.textContent = `Wind:${weather.wind.speed} m/s`;
  }
}

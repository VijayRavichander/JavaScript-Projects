const weather = new Weather("Chennai", "India");

const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("save-changes").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(res => {
      console.log(res);
      ui.paint(res);
    })
    .catch(err => {
      console.log(err);
    });
}

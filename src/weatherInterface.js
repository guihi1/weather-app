export default function weatherInterface(obj) {
  const weather = document.querySelector('.weather');
  const description = document.querySelector('.description');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const city = document.getElementById('city-name');

  city.textContent = `${obj.name}, ${obj.sys.country}`;
  weather.textContent = obj.weather[0].main;
  description.textContent = obj.weather[0].description;
  temperature.textContent = `Temperature: ${obj.main.temp}`;
  feelsLike.textContent = `Feels like: ${obj.main.feels_like}`;
  humidity.textContent = `Humidity: ${obj.main.humidity}`;
}

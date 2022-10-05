import cloudy from './images/cloudy.jpg';
import normal from './images/default.jpg';
import rain from './images/rain.jpg';
import sunny from './images/sunny.jpg';
import thunder from './images/thunderstorm.jpg';
import snow from './images/snow.jpg';
import drizzle from './images/drizzle.jpg';

function changeBackground(weather) {
  const body = document.querySelector('body');
  if (weather === 'Clouds') {
    body.style.background = `url(${cloudy})`;
  } else if (weather === 'Rain') {
    body.style.background = `url(${rain})`;
  } else if (weather === 'Clear') {
    body.style.background = `url(${sunny})`;
  } else if (weather === 'Thunderstorm') {
    body.style.background = `url(${thunder})`;
  } else if (weather === 'Drizzle') {
    body.style.background = `url(${drizzle})`;
  } else if (weather === 'Snow') {
    body.style.background = `url(${snow})`;
  } else {
    body.style.background = `url(${normal})`;
  }
}

export default function weatherInterface(obj) {
  const weather = document.querySelector('.weather');
  const description = document.querySelector('.description');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const city = document.getElementById('city-name');
  const weatherImg = document.getElementById('weather-icon');
  if (obj.hasOwnProperty('message') && obj.hasOwnProperty('cod')) {
    city.textContent = obj.message;
    weather.textContent = '';
    description.textContent = '';
    temperature.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';
  } else {
    city.textContent = `${obj.name}, ${obj.sys.country}`;
    weather.textContent = obj.weather[0].main;
    description.textContent = obj.weather[0].description;
    temperature.textContent = `Temperature: ${obj.main.temp}`;
    feelsLike.textContent = `Feels like: ${obj.main.feels_like}`;
    humidity.textContent = `Humidity: ${obj.main.humidity}%`;
    weatherImg.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    changeBackground(obj.weather[0].main);
  }
}

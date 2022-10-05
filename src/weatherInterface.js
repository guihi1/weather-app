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
  body.style.backgroundSize = 'cover';
}

export default function weatherInterface(obj) {
  const weather = document.querySelector('.weather');
  const description = document.querySelector('.description');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  const city = document.getElementById('city-name');
  const weatherImg = document.getElementById('weather-icon');
  const degree = document.getElementById('degree');
  if (obj.hasOwnProperty('message') && obj.hasOwnProperty('cod')) {
    city.textContent = obj.message;
    weather.textContent = '';
    description.textContent = '';
    temperature.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';
    weatherImg.src = '';
  } else {
    city.textContent = `${obj.name.toUpperCase()}, ${obj.sys.country}`;
    weather.textContent = obj.weather[0].main.toUpperCase();
    description.textContent = obj.weather[0].description.toUpperCase();
    temperature.textContent = `${obj.main.temp}${degree.textContent}`;
    feelsLike.textContent = `FEELS LIKE: ${obj.main.feels_like}${degree.textContent}`;
    humidity.textContent = `HUMIDITY: ${obj.main.humidity}%`;
    weatherImg.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    changeBackground(obj.weather[0].main);
  }
}

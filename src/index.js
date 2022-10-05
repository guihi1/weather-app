import './styles.css';
import weatherInterface from './weatherInterface';
import getWeather from './getWeather';

const search = document.getElementById('search-city');
const changeUnit = document.getElementById('degree');

getWeather('london').then((data) => weatherInterface(data));

search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    getWeather(document.getElementById('search-city').value).then(((data) => weatherInterface(data)));
  }
});

changeUnit.addEventListener('click', () => {
  if (changeUnit.textContent === '°C') {
    changeUnit.textContent = '°F';
  } else {
    changeUnit.textContent = '°C';
  }
  getWeather(document.getElementById('city-name').textContent).then(((data) => weatherInterface(data)));
});

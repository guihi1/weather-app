import './styles.css';
import weatherInterface from './weatherInterface';
import getWeather from './getWeather';

const search = document.getElementById('search-city');

getWeather('london').then((data) => weatherInterface(data));

search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    getWeather(document.getElementById('search-city').value).then(((data) => weatherInterface(data)));
  }
});

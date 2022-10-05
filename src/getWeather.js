export default async function getWeather(city) {
  try {
    let data;
    if (document.querySelector('#degree').textContent === '°C') {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=74cbb669a29e0705f039a0efb0eefe7e&units=metric`, { mode: 'cors' });
      data = response.json();
    } else {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=74cbb669a29e0705f039a0efb0eefe7e&units=imperial`, { mode: 'cors' });
      data = response.json();
    }
    return data;
  } catch (err) {
    const cityName = document.getElementById('city-name');
    cityName.textContent = err;
  }
}

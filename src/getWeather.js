export default async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=74cbb669a29e0705f039a0efb0eefe7e&units=metric`, { mode: 'cors' });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

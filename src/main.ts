export async function getWeather(cityName: string) {
  let result = null;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=089505f846c3f61791a473b77e84f8ed`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

console.log(await getWeather("!@#!@#!@#"));

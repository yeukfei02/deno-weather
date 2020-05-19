export async function getWeather(cityName: string) {
  let result = null;

  if (cityName.match(/^[a-zA-Z,\s]+$/g)) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=089505f846c3f61791a473b77e84f8ed`,
    );
    if (response) {
      result = response.json();
    }
  } else {
    result = {
      message: "please enter correct city name, state and country code",
    };
  }

  return result;
}

// const weather = await getWeather("hong kong");
// console.log(weather);

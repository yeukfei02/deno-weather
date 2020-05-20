export async function getWeather(cityName: string, mode?: string) {
  let result = null;

  if (cityName.match(/^[a-zA-Z,\s]+$/g)) {
    let param = {
      q: cityName,
      appid: "089505f846c3f61791a473b77e84f8ed",
    };
    if (mode && mode === "xml") {
      let obj = {
        mode: "xml",
      };
      param = Object.assign(param, obj);
    }

    const queryString = new URLSearchParams(param).toString();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${queryString}`,
    );
    if (response) {
      if (!mode) {
        result = response.json();
      } else {
        const responseText = response.text();
        result = responseText;
      }
    }
  } else {
    result = {
      message: "please enter correct city name, state and country code",
    };
  }

  return result;
}

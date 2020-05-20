# deno-weather

get current weather by city name, state and country code

use ISO 3166 country codes for city name, state and country code, divided by comma

```ts
import { getWeather } from "https://deno.land/x/deno_weather/mod.ts";

or 

import { getWeather } from "https://denopkg.com/yeukfei02/deno-weather/mod.ts";

const weather = await getWeather("hong kong");
console.log("weather = ", weather);

// weather
{
 coord: { lon: 114.16, lat: 22.29 },
 weather: [ { id: 500, main: "Rain", description: "light rain", icon: "10n" } ],
 base: "stations",
 main: {
  temp: 300.1,
  feels_like: 303.3,
  temp_min: 299.26,
  temp_max: 300.93,
  pressure: 1006,
  humidity: 83
 },
 wind: { speed: 3.58, deg: 130 },
 rain: { 1h: 0.51 },
 clouds: { all: 0 },
 dt: 1589903401,
 sys: { type: 3, id: 47808, country: "HK", sunrise: 1589838130, sunset: 1589885866 },
 timezone: 28800,
 id: 1819729,
 name: "Hong Kong",
 cod: 200
}
```
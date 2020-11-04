# deno-weather

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/deno_weather/mod.ts)

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/deno-weather)

get current weather by city name, state and country code

use ISO 3166 country codes for city name, state and country code, divided by comma

```ts
import { getWeather } from "https://deno.land/x/deno_weather/mod.ts";
import { getWeather } from "https://x.nest.land/deno-weather@0.1.8/mod.ts";
import { getWeather } from "https://denopkg.com/yeukfei02/deno-weather/mod.ts";
```

## json

```ts
const weather = await getWeather("london, uk");
console.log("weather = ", weather);

// weather json
{
 coord: { lon: -0.13, lat: 51.51 },
 weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d" } ],
 base: "stations",
 main: {
  temp: 289.64,
  feels_like: 288.73,
  temp_min: 287.59,
  temp_max: 290.93,
  pressure: 1021,
  humidity: 67
 },
 visibility: 10000,
 wind: { speed: 1.5 },
 clouds: { all: 9 },
 dt: 1589956771,
 sys: { type: 1, id: 1414, country: "GB", sunrise: 1589947279, sunset: 1590004386 },
 timezone: 3600,
 id: 2643743,
 name: "London",
 cod: 200
}
```

## xml

```ts
const weather = await getWeather("london, uk", "xml");
console.log("weather = ", weather);

// weather xml
<?xml version="1.0" encoding="UTF-8"?>
<current>
    <city id="2643743" name="London">
        <coord lon="-0.13" lat="51.51"></coord>
        <country>GB</country>
        <timezone>3600</timezone>
        <sun rise="2020-05-20T04:01:19" set="2020-05-20T19:53:06"></sun>
    </city>
    <temperature value="289.64" min="287.59" max="290.93" unit="kelvin"></temperature>
    <feels_like value="288.73" unit="kelvin"></feels_like>
    <humidity value="67" unit="%"></humidity>
    <pressure value="1021" unit="hPa"></pressure>
    <wind>
        <speed value="1.5" unit="m/s" name="Calm"></speed>
        <gusts></gusts>
        <direction></direction>
    </wind>
    <clouds value="9" name="clear sky"></clouds>
    <visibility value="10000"></visibility>
    <precipitation mode="no"></precipitation>
    <weather number="800" value="clear sky" icon="01d"></weather>
    <lastupdate value="2020-05-20T06:39:31"></lastupdate>
</current>
```

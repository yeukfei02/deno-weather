import { getWeather } from "./mod.ts";
import { assert } from "./deps.ts";

Deno.test("getWeather", async () => {
  const result = await getWeather("london, uk");
  assert(result);
});

Deno.test("getWeatherXml", async () => {
  const result = await getWeather("london, uk", "xml");
  assert(result);
});

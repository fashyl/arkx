const { cities } = require("./database/data");
const { fetchAPI } = require("./methodes/fetchAPI");
const { selectRandomCity } = require("./methodes/random");

// City --> lat, long >> FetchAPI >> Temperature
// Temperature --> stdout

async function main() {
  const { lat, lng, name } = selectRandomCity(cities);
  const {
    current_weather: { temperature },
  } = await fetchAPI(lat, lng);
  console.log(
    `The temperature in ${name} is ${temperature} °C`
  );
}

main();
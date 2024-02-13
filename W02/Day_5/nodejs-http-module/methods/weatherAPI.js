const { fetchAPI }= require("./fetchAPI");
const { readFile } = require("./fsOps");

const getCityTemperature = (cityname) => {
  return new Promise((resolve, reject) => {
    readFile(cityname)
      .then(async ({ lat, lng, name }) => {
        const {
          current_weather: { temperature, time, windspeed, winddirection },
        } = await fetchAPI(lat, lng);
        resolve({ name, temperature, lat, lng, time, windspeed, winddirection });
      })
      .catch((err) => {
        console.error("Error processing data:", err);
        reject(err);
      });
  });
};

module.exports = {
  getCityTemperature,
};

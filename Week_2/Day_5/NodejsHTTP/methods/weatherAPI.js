const { fetchAPI }= require("./fetchAPI");
const { readFile, postData } = require("./fsOps");

const getCityTemperature = (cityname) => {
  readFile(cityname)
    .then(async ({ lat, lng, name }) => {
      const {
        current_weather: { temperature, time, windspeed, winddirection },
      } = await fetchAPI(lat, lng);
      postData(name, temperature, lat, lng, time, windspeed, winddirection);
    })
    .catch((err) => {
      console.error("Error processing data:", err);
    });
};

module.exports = {
  getCityTemperature,
};

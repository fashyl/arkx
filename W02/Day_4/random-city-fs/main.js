const { fetchAPI } = require("./methods/fetchAPI");
const { readFile, createFile, cityExists } = require("./methods/fsOps");

const getCityTemperature = (cityname) => {
  readFile(cityname)
    .then(async ({ lat, lng, name }) => {
      const {
        current_weather: { temperature, time, windspeed, winddirection },
      } = await fetchAPI(lat, lng);
      createFile(name, temperature, lat, lng, time, windspeed, winddirection);

      // if (fileExists(name)) {
      //   overrideDupes(name);
      // } else {
      //   createFile(name, temperature, lat, lng, time, windspeed, winddirection);
      // } // Unnecessary since create overwrites..
    })
    .catch((err) => {
      console.error("Error processing data:", err);
    });
};

getCityTemperature(process.argv[2].trim());

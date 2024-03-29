const http  = require('http');
const url = require('url');
const { getCityTemperature } = require('./methods/weatherAPI');
require('dotenv').config()

const hostname  = process.env.HOSTNAME;
const port = process.env.PORT;

// Creating the server
const server = http.createServer((req, res) => {

  const { pathname, query } = url.parse(req.url, true);
  const path = pathname;

   // Routing: define request handlers to process different endpoints.
  if (path === "/products") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("I am a list of products :p");
  } else if (path === "/weather") {
    // Extracting the city name from the query parameter
    const { city } = query; //
    if (city) {
      const { query } = url.parse(req.url, true);
      getCityTemperature(query.city)
        .then(weatherData => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(postData(weatherData));
        })
        .catch(err => {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error fetching weather data");
        });
      
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("City parameter is missing.");
    }
  } else if (path == "/") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

function postData(cityObject) {
  return `City: ${cityObject.name}
Temperature: ${cityObject.temperature} °C
Latitude: ${cityObject.lat}
Longitude: ${cityObject.lng}
Time(here): ${cityObject.time}
Wind Speed: ${cityObject.windspeed} km/h
Wind Direction: ${cityObject.winddirection}`;
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
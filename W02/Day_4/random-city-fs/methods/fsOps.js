const { rejects } = require("assert");
const fs = require("fs");

function createFile(
  cityname,
  temperature,
  lat,
  lng,
  time,
  windspeed,
  winddirection
) {
  fs.writeFile(
    `./assets/${cityname}.txt`,
    `City: ${cityname}
Temperature: ${temperature} °C
Latitude: ${lat}
Longitude: ${lng}
Time(here): ${time}
Wind Speed: ${windspeed} km/h
Wind Direction: ${winddirection}`,
    function (err) {
      if (err) {
        console.error("Error creating file:", err);
      } else {
        console.log(`${cityname}.txt created successfully.`);
      }
    }
    );
   }
   
   function readFile(cityname) {
     const pattern = new RegExp(`${cityname}`, "i");
     return new Promise((resolve, reject) => {
       fs.readFile("./assets/input.txt", "utf8", (err, data) => {
         if (err) {
           reject((err) => console.log("Error reading file:", err));
         } else {
           const cityObject = JSON.parse(data).find((elt) =>
             pattern.test(elt.name)
           );
           resolve(cityObject);
         }
       });
     });
   }


// function fileExists(cityname) {
//   const pattern = new RegExp(`${cityname}`, "i");
//   fs.readdir("./assets", (err, files) => {
//     if (err) console.log(err);
//     else {
//       files.forEach((file) => {
//         if (pattern.test(file)) return true;
//         return false;
//       });
//     }
//   });
// }

// function overrideDupes(cityname) {
//   fs.unlink(`./assets/${cityname}.txt`, (err) => {
//     if (err) {
//       console.log("Couldn't delete file..");
//     } else {
//       console.log(`Deleted ${file} successfully.`);
//     }
//   });
// }


module.exports = {
  readFile,
  createFile,
};

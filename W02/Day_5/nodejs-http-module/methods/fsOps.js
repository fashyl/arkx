const fs = require("fs");

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

//req.body
// -> nombre (1-10)
// Hot or Cold
// Guess the number, if successful, redirect to another endpoint.

// .env
// koulchi m9ssm config(.env), methodes(), main.js 

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
};

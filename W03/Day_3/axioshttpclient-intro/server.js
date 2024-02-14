const express = require("express");
const axios = require("axios");
const { getAllProducts, getProductById } = require("./api/product-api");
const server = express();
require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;

// axios.get("https://jsonplaceholder.typicode.com/todos")
//    .then( response => console.log(response.data)); // .data defined by axios

// getAllProducts().then( products => console.log(products.data));
getProductById(9).then( product => console.log(product.data));

//    // Make a request for a user with a given ID
// axios
//   .get("/user?ID=12345")
//   .then(function (response) {
//     // .then !! PROMISE BASED.
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios
//   .get("/user", {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

server.listen(port, host, () => {
  console.log(`Listening on http://${host}:${host}/`);
});

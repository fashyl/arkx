const express = require("express");
const products = require("./assets/listofproducts");
const { updateProperty } = require("./methods/updateProductDetails");
require("dotenv").config({ path: "./config/.env" });

const port = process.env.PORT;
const host = process.env.HOST;
const server = express();


server.use(express.json()); // l'JADID 
server.get("/products", (req, res) => {
  console.log(products);
  res.status(200).json(products);
}); // GET method

server.get("/products/search", (req, res) => {
  const { brand, filter, minimum, maximum } = req.query;
  const pattern = new RegExp(`${brand}`, "ig");
  const brandResponse = products.find((product) => pattern.test(product.brand));
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));

  if(minimum && maximum) {
    return res.status(200).json(products.filter(product => product.price >= parseInt(minimum) && product.price <= parseInt(maximum)));
  }

  if (brand) {
    return res.status(200).json(brandResponse);
  }

  if (filter) {
    if (filter === "min") {
      return res.status(200).json(products.find(product => product.price === minPrice));
    } else if (filter === "max") {
      return res.status(200).json(products.find(product => product.price === maxPrice));
    }
  }

  res.status(404).send("Please specify a search parameter.");
});

server.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json(products.find((product) => product.id == id));
}); // GET method


server.post("/products", (req, res) => {
  products.push(req.body)
  res.status(200).json(products);
}); // You have to specify the content-type in the front.
// Also, a json middleware is used to parse the body content.

server.put("/products/:id", (req, res) => {
  const item = req.params.id;
  const { price, name, stock, description, brand, id , category } = req.body;
  res.send(updateProperty(item, price, name, stock, description, brand, id , category));
}); // PUT method

server.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const newArray = [...products].filter( product => product.id != id); // ParseInt or avoid ====
  res.json(newArray);
}); // DELETE method

server.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}/`);
});

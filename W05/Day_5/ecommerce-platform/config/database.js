// MongoDB's behavior.
//
const mongoose = require("mongoose");
const { config } = require("./config");

// Connect to MongoDB, Local/Atlas depends on the URI
exports.run = () => {
  mongoose
    .connect(config.databaseUrl)
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB :", error);
    });
};

// Tried using mdb, but i'll stick to mongoose for now.
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version (v1)
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// exports.run = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.log(error); // Timing out but mongoose throws no errors.
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };

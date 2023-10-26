// Import the Express.js framework and create a router.
const express = require("express");
const router = express.Router();

// Import the data model to interact with your data storage.
const data = require("../model/data");

// Define a route to handle HTTP GET requests at the root URL ("/").
router.get("/cmp", async (req, res) => {
  try {
    // Retrieve data from your data storage (e.g., a database).
    const response = await data.find();

    // Send the retrieved data as the response to the client.
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

// Define a route to handle HTTP POST requests at the "/posts" URL.
router.post("/posts", async (req, res) => {
  try {
    // Extract the data from the request body, typically sent as JSON.
    const token = req.body;

    // Insert the received data into your data storage (e.g., a database).
    await data.collection.insertOne(token);

    // Send the received data as a response to the client.
    res.send(token);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const tokenId = req.params.id;
    await data.findByIdAndDelete(tokenId);
    res.send({ message: "data deleted" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

// Export the router to make it available to other parts of your application.
module.exports = router;

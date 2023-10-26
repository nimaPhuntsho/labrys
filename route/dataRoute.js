// Import the Express.js framework and create a router.
const express = require("express");
const router = express.Router();
const dataController = require("../controller/dataController");

// Import the data model to interact with your data storage.
const data = require("../model/data");

// Define a route to handle HTTP GET requests at the root URL ("/").
router.get("/cmp", dataController.getTokens);

// Define a route to handle HTTP POST requests at the "/posts" URL.
router.post("/posts", dataController.createTokens);

router.delete("/delete/:id", dataController.deleteToken);

// Export the router to make it available to other parts of your application.
module.exports = router;

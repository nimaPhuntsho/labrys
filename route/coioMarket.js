// Import the Express.js framework and create a router.
const express = require("express");
const router = express.Router();
require("dotenv").config(); // Load environment variables from a .env file
const coinMarketController = require("../controller/coinMarketController");

// Define a route for handling requests to "/coinmarket".
router.get("/coinmarket", coinMarketController);

// Export the router to be used by the Express application.
module.exports = router;

// Import the Express.js framework and create a router.
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/coinmarket", async (req, res) => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  try {
    const fullUrl = `${apiUrl}?limit=${15}`;
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": `${apiKey}`,
      },
    });
    const result = await response.json();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

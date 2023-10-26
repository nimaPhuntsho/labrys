// Import the required modules and libraries.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const coinMarket = require("./route/coioMarket");

// Create an Express application.
const app = express();
app.use(express.json());
app.use(cors());

// Import and establish a connection to your database.
const db = require("./config/db");

// Import and use the data router for handling data-related routes.
const dataRouter = require("./route/dataRoute");
const morgan = require("morgan");

// Define the port on which the server will run.
const PORT = 5050;

// Connect to the database using the db function.
db();
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(morgan("dev"));
// Configure the Express app to parse URL-encoded request bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(coinMarket);
// Use the data router to handle data-related routes.
app.use(dataRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use("**", (req, res) => {
  res.send("404.html");
});

// Start the server, listening on the specified port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

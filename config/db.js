// Load environment variables from a .env file using the dotenv library.
require("dotenv").config();

// Retrieve the MongoDB connection string from environment variables.
const uri = process.env.CONNECTION_STRING;

// Import the Mongoose library for MongoDB database interaction.
const mongoose = require("mongoose");

// Define an asynchronous function named "run" to connect to the MongoDB database.
async function run() {
  // Connect to the MongoDB database using the provided connection string.
  const response = await mongoose.connect(uri);

  // Store the result of the database connection.
  const result = await response;

  // Log a message indicating that the database connection was successful.
  console.log(`db connected...`);
}

// Export the "run" function to be used in other parts of the application.
module.exports = run;

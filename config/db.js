require("dotenv").config();
const uri = process.env.CONNECTION_STRING;

const mongoose = require("mongoose");

async function run() {
  const response = await mongoose.connect(uri);
  const result = await response;
  console.log(`db connected...`);
}

module.exports = run;

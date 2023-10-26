// Import the data model to interact with your data storage.
const data = require("../model/data");

const getTokens = async (req, res) => {
  try {
    // Retrieve data from your data storage (e.g., a database).
    const response = await data.find();

    // Send the retrieved data as the response to the client.
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

const createTokens = async (req, res) => {
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
};

const deleteToken = async (req, res) => {
  try {
    const tokenId = req.params.id;
    await data.findByIdAndDelete(tokenId);
    res.send({ message: "data deleted" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
module.exports = {
  getTokens,
  createTokens,
  deleteToken,
};

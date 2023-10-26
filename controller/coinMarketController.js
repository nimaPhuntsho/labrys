// Define a route for handling requests to "/coinmarket".
const getCoins = async (req, res) => {
  // Retrieve the API URL and API Key from environment variables.
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  try {
    // Build the full URL with query parameters for the external API.
    const fullUrl = `${apiUrl}?limit=${15}`;

    // Make an HTTP GET request to the external API.
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": `${apiKey}`,
      },
    });

    // Parse the response as JSON and send it as the API response.
    const result = await response.json();
    res.send(result);
  } catch (error) {
    // Handle any errors that occur during the request.
    console.log(error);
  }
};

module.exports = getCoins;

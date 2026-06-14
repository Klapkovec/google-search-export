const axios = require("axios");

async function searchGoogle(query) {
    const apiKey = process.env.SERP_API_KEY;

    const response = await axios.get(
        "https://serpapi.com/search.json",
        {
            params: {
                q: query,
                engine: "google",
                api_key: apiKey
            }
        }
    );

    const results = response.data.organic_results || [];

    return results
    .slice(0, 10)
    .map(result => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet
    }));
}

module.exports = {
    searchGoogle
};
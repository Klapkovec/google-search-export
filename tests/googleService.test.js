const axios = require("axios");
const { searchGoogle } = require("../src/googleService");

jest.mock("axios");

describe("searchGoogle", () => {

    test("returns formatted search results", async () => {

        axios.get.mockResolvedValue({
            data: {
                organic_results: [
                    {
                        title: "OpenAI",
                        link: "https://openai.com",
                        snippet: "Artificial intelligence"
                    }
                ]
            }
        });

        const results = await searchGoogle("openai");

        expect(results).toEqual([
            {
                title: "OpenAI",
                link: "https://openai.com",
                snippet: "Artificial intelligence"
            }
        ]);
    });

    test("returns empty array when no results exist", async () => {

        axios.get.mockResolvedValue({
            data: {
                organic_results: []
            }
        });

        const results = await searchGoogle("nothing");

        expect(results).toEqual([]);
    });

});
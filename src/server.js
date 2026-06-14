require("dotenv").config();

const express = require("express");
const path = require("path");
const { searchGoogle } = require("./googleService");
const app = express();

app.use(express.json());

app.use(express.static(
    path.join(__dirname, "../public")
));

app.get("/search", async (req, res) => {

    const query = req.query.q;

    if (!query) {
        return res.status(400).json({
            error: "Missing query"
        });
    }

    try {

        const results = await searchGoogle(query);

        res.json(results);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Search failed"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
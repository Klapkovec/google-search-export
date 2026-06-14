let searchResults = [];

const searchBtn = document.getElementById("searchBtn");
const downloadBtn = document.getElementById("downloadBtn");

searchBtn.addEventListener("click", async () => {

    const query =
        document.getElementById("searchInput").value;

    const response =
        await fetch(`/search?q=${encodeURIComponent(query)}`);

    searchResults = await response.json();

    document.getElementById("results").textContent =
        JSON.stringify(searchResults, null, 2);
});

downloadBtn.addEventListener("click", () => {

    const blob = new Blob(
        [JSON.stringify(searchResults, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "results.json";

    link.click();

    URL.revokeObjectURL(url);
});
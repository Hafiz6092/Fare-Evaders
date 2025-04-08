// backend/api/subwayAlerts.js

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const response = await fetch("https://new.mta.info/alerts/subway"); // or use your actual backend source
    const html = await response.text();

    // Simple parsing logic (feel free to replace with cheerio, regex, etc.)
    const data = {
      message: "Fetched subway alerts HTML successfully",
      snippet: html.substring(0, 200) + "..." // Just a preview
    };

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching subway alerts:", err);
    res.status(500).json({ error: "Failed to fetch subway alerts" });
  }
};

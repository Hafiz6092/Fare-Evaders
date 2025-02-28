require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA Service Alerts API**
const SERVICE_ALERTS_URL = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fall-alerts";

// **Fetch Service Alerts**
router.get('/subway/alerts', async (req, res) => {
    try {
        console.log("Fetching MTA Subway Service Alerts...");

        const response = await axios.get(SERVICE_ALERTS_URL, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer'
        });

        // Decode the GTFS-RT protobuf response
        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        const jsonData = feed.toJSON();

        res.json(jsonData);
    } catch (error) {
        console.error("Error fetching subway alerts:", error.message);
        res.status(500).json({ error: "Failed to fetch subway alerts" });
    }
});

module.exports = router;

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;
const SUBWAY_ALERTS_URL = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts";

// **Fetch Subway Service Alerts**
router.get('/subway-alerts', async (req, res) => {
    try {
        const response = await axios.get(SUBWAY_ALERTS_URL, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer',
        });

        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        const jsonData = feed.toJSON();

        res.json(jsonData);
    } catch (error) {
        console.error("Error fetching subway alerts:", error.message);
        res.status(500).json({ error: "Failed to fetch subway alerts" });
    }
});

module.exports = router;

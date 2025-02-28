require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA NQRW Line Real-Time Feed**
const NQRW_FEED_URL = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw";

// **Fetch NQRW Line Data**
router.get('/subway/nqrw', async (req, res) => {
    try {
        console.log("Fetching NQRW Subway Real-Time Data...");

        const response = await axios.get(NQRW_FEED_URL, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer'
        });

        // Decode the GTFS-RT protobuf response
        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        const jsonData = feed.toJSON();

        res.json(jsonData);
    } catch (error) {
        console.error("Error fetching NQRW subway data:", error.message);
        res.status(500).json({ error: "Failed to fetch NQRW subway data" });
    }
});

module.exports = router;

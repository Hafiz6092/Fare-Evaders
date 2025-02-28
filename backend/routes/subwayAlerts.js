require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA Service Alerts Feed**
const SERVICE_ALERTS_FEED = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fall-alerts";

// **Fetch Service Alerts**
const fetchServiceAlerts = async () => {
    try {
        console.log(`Fetching service alerts...`);
        const response = await axios.get(SERVICE_ALERTS_FEED, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer'
        });

        if (response.status !== 200) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return { error: "Failed to fetch service alerts" };
        }

        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        return feed.toJSON();
    } catch (error) {
        console.error(`Error fetching service alerts:`, error.message);
        return { error: "Failed to fetch service alerts" };
    }
};

// **GET /subway/alerts → Fetch subway service alerts**
router.get('/subway/alerts', async (req, res) => {
    const data = await fetchServiceAlerts();
    res.json(data);
});

module.exports = router;

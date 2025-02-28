require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA Subway GTFS-RT Feed (All Lines)**
const SUBWAY_ALL_FEED = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs";

// **Fetch All Subway Data**
const fetchSubwayData = async () => {
    try {
        console.log(`Fetching all subway data...`);
        const response = await axios.get(SUBWAY_ALL_FEED, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer'
        });

        if (response.status !== 200) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return { error: "Failed to fetch subway data" };
        }

        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        return feed.toJSON();
    } catch (error) {
        console.error(`Error fetching all subway data:`, error.message);
        return { error: "Failed to fetch subway data" };
    }
};

// **GET /subway/all → Fetch all subway data**
router.get('/subway/all', async (req, res) => {
    const data = await fetchSubwayData();
    res.json(data);
});

module.exports = router;

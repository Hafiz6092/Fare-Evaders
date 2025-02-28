require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA Subway GTFS-RT Feeds for Specific Lines**
const SUBWAY_FEEDS = {
    "all": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs",
    "nqrw": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw",
    "bdfm": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm"
};

// **Fetch Subway Data Based on Requested Line**
const fetchSubwayData = async (feedUrl) => {
    try {
        const response = await axios.get(feedUrl, {
            headers: { "x-api-key": API_KEY },
            responseType: 'arraybuffer'
        });
        const feed = protobuf.transit_realtime.FeedMessage.decode(new Uint8Array(response.data));
        return feed.toJSON();
    } catch (error) {
        console.error(`Error fetching data from ${feedUrl}:`, error.message);
        return { error: "Failed to fetch subway data" };
    }
};

// **1️⃣ Get Subway Data for All Lines**
router.get('/subway/all', async (req, res) => {
    const data = await fetchSubwayData(SUBWAY_FEEDS["all"]);
    res.json(data);
});

// **2️⃣ Get Subway Data for N, Q, R, W Lines**
router.get('/subway/nqrw', async (req, res) => {
    const data = await fetchSubwayData(SUBWAY_FEEDS["nqrw"]);
    res.json(data);
});

// **3️⃣ Get Subway Data for B, D, F, M Lines**
router.get('/subway/bdfm', async (req, res) => {
    const data = await fetchSubwayData(SUBWAY_FEEDS["bdfm"]);
    res.json(data);
});

module.exports = router;

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const protobuf = require('gtfs-realtime-bindings');

const router = express.Router();
const API_KEY = process.env.MTA_API_KEY;

// **MTA Subway GTFS-RT Feed (NQRW Line)**
const SUBWAY_NQRW_FEED = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw";

// **Fetch NQRW Subway Data**
const fetchSubwayData = async () => {
    try {
        console.log(`Fetching NQRW subway data...`);
        const response = await axios.get(SUBWAY_NQRW_FEED, {
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
        console.error(`Error fetching NQRW subway data:`, error.message);
        return { error: "Failed to fetch subway data" };
    }
};

// **GET /subway/nqrw → Fetch only NQRW subway data**
router.get('/subway/nqrw', async (req, res) => {
    const data = await fetchSubwayData();
    res.json(data);
});

module.exports = router;

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const busRealTimeRoutes = require('./routes/busRealTime');
const busStaticDataRoutes = require('./routes/busStaticData');
const subwayRealTimeRoutes = require('./routes/subwayRealTime');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

// Use separated routes
app.use('/api/mta', busRealTimeRoutes);
app.use('/api/mta', busStaticDataRoutes);
app.use('/api/mta', subwayRealTimeRoutes);

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

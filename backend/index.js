require('dotenv').config();
const express = require('express');
const cors = require('cors');

const subwayRealTimeRoutes = require('./routes/subwayRealTime');
const subwayAlertsRoutes = require('./routes/subwayAlerts');  // NEW
const subwayNQRWRoutes = require('./routes/subwayNQRW');  // NEW

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

// Use separated routes
app.use('/api/mta', subwayRealTimeRoutes);
app.use('/api/mta', subwayAlertsRoutes);  // Add Service Alerts Route
app.use('/api/mta', subwayNQRWRoutes);  // Add NQRW Line Route

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

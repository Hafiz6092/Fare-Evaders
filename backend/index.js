require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const subwayAllRoutes = require('./routes/subwayAll'); // Fetch all subway data
// const subwayNQRWRoutes = require('./routes/subwayNQRW'); // Fetch only NQRW data
const subwayAlertsRoutes = require('./routes/subwayAlerts');


const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

// **Use the separated routes**
// app.use('/api/mta', subwayAllRoutes);
// app.use('/api/mta', subwayNQRWRoutes);
app.use('/api/mta', subwayAlertsRoutes);

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

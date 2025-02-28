require('dotenv').config();
const express = require('express');
const cors = require('cors');

const subwayRealTimeRoutes = require('./routes/subwayRealTime');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

// Use subway routes only
app.use('/api/mta', subwayRealTimeRoutes);

app.listen(PORT, () => {
    console.log(`✅ Subway Data Server running on http://localhost:${PORT}`);
});

import React, { useState, useEffect } from "react";
import axios from "axios";

const SubwayAlerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get("http://localhost:5050/api/mta/subway-alerts", {
                    headers: { "x-api-key": "YOUR_MTA_API_KEY" },
                });
                setAlerts(response.data.entity);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching subway alerts:", err);
                setError("Failed to load alerts");
                setLoading(false);
            }
        };

        fetchAlerts();
    }, []);

    return (
        <div>
            <h1>Service Alerts</h1>
            {loading && <p>Loading alerts...</p>}
            {error && <p>{error}</p>}
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.alert.headerText?.translation[0]?.text}</strong>
                        <p>{alert.alert.descriptionText?.translation[0]?.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubwayAlerts;

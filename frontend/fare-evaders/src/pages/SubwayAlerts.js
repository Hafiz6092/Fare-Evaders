import React, { useState, useEffect } from "react";
import axios from "axios";

const SubwayAlerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLine, setSelectedLine] = useState("All");

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get("http://localhost:5050/api/mta/subway-alerts", {
                    headers: { "x-api-key": "YOUR_MTA_API_KEY" },
                });

                // Extract only relevant alert data
                const formattedAlerts = response.data.entity.map((alert) => {
                    const routeId = alert.alert.informedEntity.find(entity => entity.routeId)?.routeId || "Unknown";

                    // Extract only the `en-html` version of the messages
                    const headerText = alert.alert.headerText?.translation.find(t => t.language === "en-html")?.text || "No header text available";
                    let descriptionText = alert.alert.descriptionText?.translation.find(t => t.language === "en-html")?.text;

                    // If description is missing, replace with MTA Bus Time link
                    if (!descriptionText) {
                        descriptionText = `<a href="https://bustime.mta.info" target="_blank" rel="noopener noreferrer">More Info</a>`;
                    }

                    return { routeId, headerText, descriptionText };
                });

                setAlerts(formattedAlerts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching subway alerts:", err);
                setError("Failed to load alerts");
                setLoading(false);
            }
        };

        fetchAlerts();
    }, []);

    // Get unique subway lines from the fetched alerts
    const subwayLines = ["All", ...new Set(alerts.map(alert => alert.routeId))];

    // Filter alerts based on selected subway line
    const filteredAlerts = selectedLine === "All" ? alerts : alerts.filter(alert => alert.routeId === selectedLine);

    return (
        <div>
            <h1>Service Alerts</h1>

            <label>Filter by Subway Line: </label>
            <select value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
                {subwayLines.map((line, index) => (
                    <option key={index} value={line}>{line}</option>
                ))}
            </select>

            {loading && <p>Loading alerts...</p>}
            {error && <p>{error}</p>}

            <ul>
                {filteredAlerts.map((alert, index) => (
                    <li key={index}>
                        <strong dangerouslySetInnerHTML={{ __html: alert.headerText }}></strong>
                        <p dangerouslySetInnerHTML={{ __html: alert.descriptionText }}></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubwayAlerts;

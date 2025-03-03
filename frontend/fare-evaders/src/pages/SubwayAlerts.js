import React, { useState, useEffect } from "react";
import axios from "axios";

const SubwayAlerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [filteredAlerts, setFilteredAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subwayLines, setSubwayLines] = useState([]);
    const [selectedLine, setSelectedLine] = useState("All");

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get("http://localhost:5050/api/mta/subway-alerts", {
                    headers: { "x-api-key": "YOUR_MTA_API_KEY" },
                });

                const data = response.data.entity || [];
                setAlerts(data);

                // Extract unique subway names
                const lines = new Set();
                data.forEach(alert => {
                    if (alert.alert.informedEntity) {
                        alert.alert.informedEntity.forEach(entity => {
                            if (entity.routeId) {
                                lines.add(entity.routeId);
                            }
                        });
                    }
                });

                setSubwayLines(["All", ...Array.from(lines)]);
                setFilteredAlerts(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching subway alerts:", err);
                setError("Failed to load alerts");
                setLoading(false);
            }
        };

        fetchAlerts();
    }, []);

    // Filter alerts when user selects a subway line
    useEffect(() => {
        if (selectedLine === "All") {
            setFilteredAlerts(alerts);
        } else {
            setFilteredAlerts(
                alerts.filter(alert =>
                    alert.alert.informedEntity?.some(entity => entity.routeId === selectedLine)
                )
            );
        }
    }, [selectedLine, alerts]);

    return (
        <div>
            <h1>Service Alerts</h1>
            {loading && <p>Loading alerts...</p>}
            {error && <p>{error}</p>}

            {/* Dropdown for selecting subway line */}
            <label htmlFor="subwayFilter">Filter by Subway Line: </label>
            <select
                id="subwayFilter"
                value={selectedLine}
                onChange={(e) => setSelectedLine(e.target.value)}
            >
                {subwayLines.map((line, index) => (
                    <option key={index} value={line}>
                        {line}
                    </option>
                ))}
            </select>

            {/* Display Filtered Alerts */}
            <ul>
                {filteredAlerts.map((alert, index) => (
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

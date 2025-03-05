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
        <div class="">
            <h1 class="text-2xl flex p-4 font-serif bg-gray-700 text-white">Service Alerts</h1>
            <div class="text-xl flex p-2 mx-auto font-sans font-serif bg-gray-800 pb-2">
                <label class="bg-zinc-800 text-white rounded-md box-border size-18 border-4 p-4 ">Filter by Subway Line: </label>
                <select class="bg-zinc-800 text-white rounded-md box-border size-18 border-4 p-4 " value={selectedLine} onChange={(e) => setSelectedLine(e.target.value)}>
                    {subwayLines.map((line, index) => (
                        <option key={index} value={line}>{line}</option>
                    ))}
                </select> 
            </div>
         
                {loading && <p>Loading alerts...</p>}
                {error && <p>{error}</p>}

            <ul className="pt-4 pr-2 pl-2 text-white bg-gray-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                {filteredAlerts.map((alert, index) => (
                    <li
                    key={index}
                    className="bg-gray-900 rounded-md box-border border-2 p-4 w-full flex flex-col font-serif"
                    >
                    <strong dangerouslySetInnerHTML={{ __html: alert.headerText }}></strong>
                    <p dangerouslySetInnerHTML={{ __html: alert.descriptionText }}></p>
                    </li>
                ))}
            </ul>




        </div>
    );
};

export default SubwayAlerts;

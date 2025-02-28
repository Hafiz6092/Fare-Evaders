import { useState, useEffect } from "react";
import axios from "axios";

const SubwayData = () => {
    const [subwayData, setSubwayData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5050/api/mta/subway/all")
            .then((res) => setSubwayData(res.data))
            .catch((err) => console.error("Error fetching subway data:", err));
    }, []);

    return (
        <div>
            <h1>MTA Subway Real-Time Data</h1>
            {subwayData ? (
                <pre>{JSON.stringify(subwayData, null, 2)}</pre>
            ) : (
                <p>Loading subway data...</p>
            )}
        </div>
    );
};

export default SubwayData;

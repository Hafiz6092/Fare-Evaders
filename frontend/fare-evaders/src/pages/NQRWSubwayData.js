import React, { useEffect, useState } from "react";
import axios from "axios";

function NQRWSubwayData() {
    const [data, setData] = useState(null);  // Set initial state to null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5050/api/mta/subway/nqrw", {
            headers: { "x-api-key": process.env.REACT_APP_MTA_API_KEY }  // Ensure your key is in .env file
        })
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <h2>Loading subway data...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    if (!data || !data.entity) return <h2>No subway data available.</h2>;  // Handle missing data

    return (
        <div>
            <h1>NQRW Subway Data</h1>
            <ul>
                {data.entity.map((train, index) => (
                    <li key={index}>
                        <strong>Train ID:</strong> {train.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NQRWSubwayData;

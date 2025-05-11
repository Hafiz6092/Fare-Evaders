import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="additional-resources">
                {/* <h3>Additional Resources</h3> */}
                <div className="resource-buttons">
                <button onClick={() => navigate('/resources')}>Additional Resources</button>

                    {/* <button onClick={() => navigate('/alerts')}>Alerts</button> */}
                    {/* <button onClick={() => navigate('/map')}>Map</button> */}
                    {/* <button onClick={() => navigate('/info')}>MTA Help</button> */}
                </div>
            </div>

            <div className="main-content">
                <header>
                    <h1>What's the deal with the MTA?</h1>
                </header>

                <section id="intro">
                    <p>The MTA estimates a large portion of revenue is lost due to fare evasion which ultimately hurts the riders of NYC, but how strong is their claim?</p>
                </section>

                <button className="findings-button" onClick={() => navigate('/bar_graph')}>
                    Our Findings
                </button>
            </div>

            <footer>
                <p>© 2025 MTA Fare Evaders</p>
            </footer>
        </div>
    );
}

export default Home;
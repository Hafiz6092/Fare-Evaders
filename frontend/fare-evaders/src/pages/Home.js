import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="left-half">
                <div className="content">
                    <header>
                        <h1>MTA Fare Evasion: Financial Strain</h1>
                    </header>

                    <section id="intro">
                        <p>MTA Fare Evasion exposes the financial strain on public transportation, impacting service quality and infrastructure maintenance.</p>
                    </section>

                    <div className="buttons">
                        <button onClick={() => navigate('/alerts')}>Subway Alerts</button>
                        <button onClick={() => navigate('/map')}>Map</button>
                        <button onClick={() => navigate('/info')}>MTA Help</button> {/* Updated button */}
                    </div>
                </div>
            </div>

            <div className="right-half">
                {/* Placeholder for the image */}
                <div className="image-placeholder">
                    <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Placeholder" />
                </div>
            </div>

            <footer>
                <p> 2025 MTA Fare Evaders</p>
            </footer>
        </div>
    );
}

export default Home;
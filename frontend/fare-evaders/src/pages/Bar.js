import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarGraph from "../components/BarGraph";
import FareEvasion1 from "../assets/FareEvasion1.png";
import FareEvasion2 from "../assets/FareEvasion2.png";
import FareEvasion3 from "../assets/FareEvasion3.png";
import TempImage from "../assets/temp-image.webp";

function Bar() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [FareEvasion1, FareEvasion2, FareEvasion3];
    const navigate = useNavigate();

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-gray-950 min-h-screen p-8">
            <div className="max-w-6xl mx-auto">

                <div className="mb-8 p-6 bg-gray-900 rounded-lg">
                    <h2 className="text-white text-2xl font-bold mb-4">Our Claim</h2>
                    <p className="text-gray-300 mb-6">
                        The MTA reports an estimated $285 million in annual losses due to fare evasion. Our project aims to investigate how accurate this figure is by analyzing publicly available data, identifying trends, and exploring whether the numbers align with reality—or if the impact is being overstated.
                    </p>
                    
                    <div className="border-l-4 border-blue-500 pl-4 mb-4">
                        <blockquote className="text-white text-lg italic mb-2">
                            "Losses to the MTA's operating budget are staggering, with nearly $700 million in revenue not collected in 2022 alone. This includes $315 million lost in bus fares, $285 million in subway fares, $46 million in bridge and tunnel tolls, and $44 million in railroad fares."
                        </blockquote>
                    </div>
                    <a 
                        href="https://www.mta.info/blue-ribbon-report-fare-toll-evasion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                    >
                        Source: MTA Blue Ribbon Panel Report
                    </a>
                </div>


                <div className="mb-8 relative">
                    <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
                        <img 
                            src={images[currentImageIndex]}
                            alt={`Fare evasion news ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain p-4"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = TempImage;
                            }}
                        />
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-500'}`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>


                <div className="mb-8 p-6 bg-gray-900 rounded-lg">
                    <h2 className="text-white text-2xl font-bold mb-4">Understanding the Data</h2>
                    <p className="text-gray-300 mb-4">
                        This bar graph offers a high-level view of fare evasion trends across New York City's transit system, using arrest and summons data provided by the NYPD. We cleaned and organized the dataset to focus specifically on fare evasion-related incidents, breaking them down by transit district to give a clear picture of where these events are most frequent.
                    </p>
                    <p className="text-gray-300">
                        A key trend stands out: there's a sharp drop in enforcement during the early months of the COVID-19 pandemic, likely due to decreased ridership and operational shifts. However, the data shows a steady rise afterward, indicating that fare evasion remains a recurring and possibly escalating issue. This visualization acts as a launch point for our project—highlighting that fare evasion isn't sporadic, but rather a consistent pattern that warrants further investigation.
                    </p>
                </div>


                <BarGraph />


                <div className="mt-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h2 className="text-white text-2xl font-bold mb-6">We Then Take A Look At Turnstile Data</h2>
                    <button
                        onClick={() => navigate("/turnstile-analysis")}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mx-auto hover:scale-105"
                    >
                        View Turnstile Analysis
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bar;
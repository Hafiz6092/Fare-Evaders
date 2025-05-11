import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TurnstileAnalysis() {
    const [currentMonthlyIndex, setCurrentMonthlyIndex] = useState(0);
    const [currentYearlyIndex, setCurrentYearlyIndex] = useState(0);
    
    const monthlyImages = [
        require("../assets/tt1.png"),
        require("../assets/tt2.png"),
        require("../assets/tt3.png")
    ];
    
    const yearlyImages = [
        require("../assets/traffic1.png"),
        require("../assets/traffic2.png"),
        require("../assets/traffic3.png")
    ];
    
    const navigate = useNavigate();

    const navigateMonthly = (direction) => {
        setCurrentMonthlyIndex(prev => 
            direction === 'next' 
                ? (prev === monthlyImages.length - 1 ? 0 : prev + 1)
                : (prev === 0 ? monthlyImages.length - 1 : prev - 1)
        );
    };

    const navigateYearly = (direction) => {
        setCurrentYearlyIndex(prev => 
            direction === 'next' 
                ? (prev === yearlyImages.length - 1 ? 0 : prev + 1)
                : (prev === 0 ? yearlyImages.length - 1 : prev - 1)
        );
    };

    return (
        <div className="bg-gray-950 min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <button 
                    onClick={() => navigate(-1)}
                    className="mb-6 text-blue-400 hover:underline flex items-center"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="mr-1">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Report
                </button>

                {/* Monthly Traffic Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Comparing Monthly Subway Traffic by Type</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            To better understand subway activity patterns, we generated monthly traffic summaries showing
                            entries, exits, and the combined total across all stations. This helps us visualize not just raw
                            volume, but also any seasonal or month-to-month changes.
                        </p>
                        <p>
                            The following three charts compare:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Total monthly entries</li>
                            <li>Total monthly exits</li>
                            <li>Total combined traffic (entries + exits)</li>
                        </ul>
                        <p>
                            These provide a clearer look at fluctuations across the year and can help identify high-volume
                            periods where fare evasion might have a more significant impact.
                        </p>
                    </div>
                    
                    <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <img 
                            src={monthlyImages[currentMonthlyIndex]}
                            alt={`Monthly traffic visualization ${currentMonthlyIndex + 1}`}
                            className="w-full h-full object-contain p-4"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <button 
                            onClick={() => navigateMonthly('prev')}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Previous chart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => navigateMonthly('next')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Next chart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center mb-8">
                        {monthlyImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentMonthlyIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${currentMonthlyIndex === index ? 'bg-blue-500' : 'bg-gray-500'}`}
                                aria-label={`View chart ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Yearly Trends Section */}
                
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Year-over-Year Subway Traffic Trends</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            To gain a broader view, we also looked at daily total subway traffic across multiple years.
                            These time-series line graphs show how traffic levels changed over time, including during major
                            events like COVID lockdowns or seasonal peaks.
                        </p>
                        <p>
                            The three charts below represent:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Total daily traffic in 2020 (pandemic year, sharp drops visible)</li>
                            <li>Total daily traffic in 2021 (recovery trends emerge)</li>
                            <li>Total daily traffic in 2023-2024 (stabilization begins)</li>
                        </ul>
                        <p>
                            These visual trends give us more context behind the ridership data used in our revenue
                            approximations and help explain anomalies in monthly revenue or enforcement.
                        </p>
                    </div>
                    
                    <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <img 
                            src={yearlyImages[currentYearlyIndex]}
                            alt={`Yearly traffic visualization ${currentYearlyIndex + 1}`}
                            className="w-full h-full object-contain p-4"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <button 
                            onClick={() => navigateYearly('prev')}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Previous chart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => navigateYearly('next')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                            aria-label="Next chart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center mb-8">
                        {yearlyImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentYearlyIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${currentYearlyIndex === index ? 'bg-blue-500' : 'bg-gray-500'}`}
                                aria-label={`View chart ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bi-Weekly Ridership Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Aggregating Data to Estimate Bi-Weekly Ridership</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            We then began estimating system wide fare revenue and scale we pulled
                            hourly subway ridership data from the New York State Open Data portal
                            specifically the dataset titled "MTA Subway Hourly Ridership 2020 to 2024".
                        </p>
                        <p>
                            Our goal was to understand how much traffic the system was actually
                            experiencing and how that might connect to reported revenue claims.
                        </p>
                        <p>
                            We aggregated daily ridership data across various stations and dates to
                            create a picture of what a typical two week period might look like in terms
                            of volume. From there we cross referenced the ridership estimates dataset with publicly known figures.
                            This helped us build a formula to  reflect average MTA Earnings from fares in a specific timeline That
                            number seems to reflect average MTA earnings from fares in
                            that timeframe.
                        </p>
                        <p>
                            While we cannot guarantee every rider paid full fare or even paid at all this
                            gave us a baseline to work with. It also helped us reverse engineer how
                            many rides would need to be taken for 170 million dollars to be generated
                            in that span assuming a standard fare. This foundational step allowed us to
                            build out the rest of our financial estimates and start asking how fare
                            evasion might be impacting the system.
                        </p>
                    </div>
                    <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <div className="flex justify-center mb-8">
                        <img 
                            src={require("../assets/Revenue.png")}
                            alt="Revenue estimation visualization"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                    </div>
                </div>

                {/* Annual Total Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Estimating the Annual Total 4.4 Billion Compared to 6 Billion</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            If the system earns approximately 170 million dollars every two weeks this leads us to a rough
                            annual projection:
                        </p>
                        <p className="font-mono text-lg">
                            170 million times 26 weeks equals approximately 4.42 billion dollars per year
                        </p>
                        <span className="font-bold">
                        <p>
                            However this estimate is noticeably lower than the 6 billion dollar revenue figure that the MTA
                            officially reports. That gap left us a bit puzzled. We expected some difference due to rounding or
                            variability but a 1.5 billion dollar difference felt significant. One possible explanation could be
                            that the MTA's reported revenue includes additional income streams we do not have access to
                            such as advertising leasing or internal accounting adjustments. Our calculations are based
                            solely on fare revenue implied by a bi weekly figure of 170 million dollars which may only reflect
                            a portion of the full financial picture.
                        </p>
                        <p>
                            It is also important to emphasize that we are working entirely with publicly available data which
                            has its own limitations. For example while we could access station level ridership counts and
                            enforcement reports many of the MTA's internal operational and financial datasets are not
                            openly shared with the public. A 2023 report by Reinvent Albany noted that the MTA is not
                            subject to New York City's Open Data Law and that many important datasets including those
                            related to budget breakdowns fare evasion methods or enforcement decisions are either
                            unpublished or only partially released.
                        </p>
                        <p>
                            Because of this our estimate should be viewed as a rough model rather than a precise
                            measurement. It opens the door to more questions than answers especially when comparing
                            our figure to the MTA's much larger revenue claim.
                        </p>
                        </span>
                    </div>
                </div>

                {/* Fare Evasion Loss Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Estimating Fare Evasion Loss Based on Public Revenue Approximations</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            Although the data is not entirely clear or complete we still wanted to apply a consistent method
                            to estimate how much the MTA might be losing due to fare evasion. Instead of immediately
                            working with the full year revenue figure we took a closer look at what the weekly fare evasion
                            losses might be and then scaled that across the year.
                        </p>
                        <p>
                            If the MTA generates roughly 170 million dollars every 2 weeks that breaks down to about 85
                            million dollars per week.
                        </p>
                        <p>
                            Using that weekly figure we estimated the weekly fare evasion losses at various percentages
                            then multiplied those amounts by 52 weeks to get a full year projection.
                        </p>
                        <p>
                            Using 85 million dollars per week:
                        </p>
                        <ul className="list-disc list-inside pl-4 space-y-2">
                            <li><span className="font-bold">5 percent fare evasion loss</span><br/>
                            85 million times 0.05 equals 4.25 million dollars lost per week<br/>
                            4.25 million times 52 weeks equals 221 million dollars lost annually</li>
                            <li><span className="font-bold">6 percent fare evasion loss</span><br/>
                            85 million times 0.06 equals 5.1 million dollars lost per week<br/>
                            5.1 million times 52 weeks equals 265.2 million dollars lost annually</li>
                            <li><span className="font-bold">7 percent fare evasion loss</span><br/>
                            85 million times 0.07 equals 5.95 million dollars lost per week<br/>
                            5.95 million times 52 weeks equals 309.4 million dollars lost annually</li>
                        </ul>
                        <p>
                            These weekly to annual projections match the same yearly range we got before but we found it
                            helpful to frame the loss in smaller units first. It made the potential scale of fare evasion easier
                            to grasp especially when looking at how just a few million dollars per week could add up to over
                            a quarter billion dollars per year.
                        </p>
                    </div>
                </div>

                {/* Missing Data Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Missing and Unavailable Data</h1>
                    <div className="space-y-4 text-gray-300 mb-6">
                        <p>
                            As we worked through this project one of the biggest limitations we ran into was the lack of
                            publicly available data. While the MTA does release some useful datasets like hourly ridership
                            and enforcement reports, many of the most critical and specific data sources remain either
                            unpublished, incomplete or hard to verify.
                        </p>
                        <p>
                            For instance we could not find consistent or transparent information on how fare evasion is
                            measured across the system. Are these losses being calculated through random sampling
                            sensor based tracking or manual observation? Are fare evasion rates broken down by specific
                            stations, boroughs or time periods? Without answers to these questions it becomes difficult to
                            assess where fare evasion is actually happening versus where enforcement is simply more
                            visible.
                        </p>
                        <p>
                            Additionally enforcement data only tells part of the story. While we can see where arrests and
                            summonses occur this does not show us the broader patterns of fare evasion itself. In some
                            areas people may evade fares regularly but avoid detection entirely due to limited enforcement.
                            In others higher arrest numbers may reflect targeted policing more than actual evasion
                            frequency. This makes it hard to pinpoint the most affected areas or understand how
                            enforcement aligns with actual financial losses.
                        </p>
                        <p>
                            Overall this made us realize that while public data can reveal interesting patterns it also comes
                            with blind spots. Our analysis is shaped not only by what we could find but also by what was left
                            out and those gaps raised important questions we could not fully answer. It reminded us that
                            any meaningful assessment of fare evasion needs to be matched with greater data
                            transparency from the agencies that shape public transportation policy.
                        </p>
                    </div>
                </div>

                {/* Sources Section */}
                <div className="mt-12 mb-12 p-6 bg-gray-900 rounded-lg text-center">
                    <h1 className="text-white text-3xl font-bold mb-6">Sources</h1>
                    <div className="space-y-2 text-blue-400">
                        <p><a href="https://data.ny.gov/Transportation/MTA-Subway-Hourly-Ridership-2020-2024/wujg-7c2s/about_data" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Subway Hourly Ridership 2020-2024</a></p>
                        <p><a href="https://www.mta.info/document/118906" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Official Reports</a></p>
                        <p><a href="https://www.mta.info/developers" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Developer Resources</a></p>
                        <p><a href="https://data.ny.gov/Transportation/MTA-NYCT-Subway-Fare-Evasion-Beginning-2018/6kj3-ijvb/about_data" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Subway Fare Evasion Data</a></p>
                        <p><a href="https://data.ny.gov/Transportation/MTA-Subway-Hourly-Ridership-Beginning-2025/5wq4-mkjj/about_data" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Subway Hourly Ridership (2025+)</a></p>
                        <p><a href="https://catalog.data.gov/dataset/mta-daily-ridership-data-beginning-2020" target="_blank" rel="noopener noreferrer" className="hover:underline">MTA Daily Ridership Data</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TurnstileAnalysis;
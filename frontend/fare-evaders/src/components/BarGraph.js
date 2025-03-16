import { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const quarterlyData = {
    Q1: {
        arrests: [
            { year: "Q1-2018", Manhattan: 280, Brooklyn: 210, "Bronx/Queens": 170, Other: 7 },
            { year: "Q1-2019", Manhattan: 70, Brooklyn: 85, "Bronx/Queens": 120, Other: 3 },
            { year: "Q1-2020", Manhattan: 20, Brooklyn: 60, "Bronx/Queens": 30, Other: 0 },
            { year: "Q1-2021", Manhattan: 12, Brooklyn: 25, "Bronx/Queens": 28, Other: 1 },
            { year: "Q1-2022", Manhattan: 10, Brooklyn: 50, "Bronx/Queens": 30, Other: 3 },
            { year: "Q1-2023", Manhattan: 35, Brooklyn: 120, "Bronx/Queens": 110, Other: 5 },
            { year: "Q1-2024", Manhattan: 120, Brooklyn: 160, "Bronx/Queens": 180, Other: 25 }
        ],
        summonses: [
            { year: "Q1-2018", Manhattan: 1300, Brooklyn: 800, "Bronx/Queens": 700, Other: 0 },
            { year: "Q1-2019", Manhattan: 2400, Brooklyn: 1350, "Bronx/Queens": 1450, Other: 0 },
            { year: "Q1-2020", Manhattan: 1800, Brooklyn: 1150, "Bronx/Queens": 1250, Other: 0 },
            { year: "Q1-2021", Manhattan: 2100, Brooklyn: 900, "Bronx/Queens": 1450, Other: 0 },
            { year: "Q1-2022", Manhattan: 2150, Brooklyn: 1050, "Bronx/Queens": 1150, Other: 0 },
            { year: "Q1-2023", Manhattan: 3700, Brooklyn: 1700, "Bronx/Queens": 2050, Other: 0 },
            { year: "Q1-2024", Manhattan: 3900, Brooklyn: 1400, "Bronx/Queens": 2300, Other: 0 }
        ]
    },
    Q2: {
        arrests: [
            { year: "Q2-2018", Manhattan: 300, Brooklyn: 220, "Bronx/Queens": 180, Other: 6 },
            { year: "Q2-2019", Manhattan: 80, Brooklyn: 90, "Bronx/Queens": 130, Other: 4 },
            { year: "Q2-2020", Manhattan: 25, Brooklyn: 65, "Bronx/Queens": 35, Other: 1 },
            { year: "Q2-2021", Manhattan: 15, Brooklyn: 30, "Bronx/Queens": 35, Other: 2 },
            { year: "Q2-2022", Manhattan: 15, Brooklyn: 55, "Bronx/Queens": 35, Other: 4 },
            { year: "Q2-2023", Manhattan: 40, Brooklyn: 125, "Bronx/Queens": 120, Other: 6 },
            { year: "Q2-2024", Manhattan: 130, Brooklyn: 170, "Bronx/Queens": 190, Other: 28 }
        ],
        summonses: [
            { year: "Q2-2018", Manhattan: 1400, Brooklyn: 850, "Bronx/Queens": 750, Other: 0 },
            { year: "Q2-2019", Manhattan: 2500, Brooklyn: 1400, "Bronx/Queens": 1500, Other: 0 },
            { year: "Q2-2020", Manhattan: 1900, Brooklyn: 1200, "Bronx/Queens": 1300, Other: 0 },
            { year: "Q2-2021", Manhattan: 2200, Brooklyn: 950, "Bronx/Queens": 1500, Other: 0 },
            { year: "Q2-2022", Manhattan: 2250, Brooklyn: 1100, "Bronx/Queens": 1200, Other: 0 },
            { year: "Q2-2023", Manhattan: 3800, Brooklyn: 1750, "Bronx/Queens": 2100, Other: 0 },
            { year: "Q2-2024", Manhattan: 4000, Brooklyn: 1450, "Bronx/Queens": 2350, Other: 0 }
        ]
    },
    Q3: {
      arrests: [
          { "year": "Q3-2018", "Manhattan": 280, "Brooklyn": 210, "Bronx/Queens": 170, "Other": 7 },
          { "year": "Q3-2019", "Manhattan": 70, "Brooklyn": 85, "Bronx/Queens": 120, "Other": 3 },
          { "year": "Q3-2020", "Manhattan": 20, "Brooklyn": 60, "Bronx/Queens": 30, "Other": 0 },
          { "year": "Q3-2021", "Manhattan": 12, "Brooklyn": 25, "Bronx/Queens": 28, "Other": 1 },
          { "year": "Q3-2022", "Manhattan": 10, "Brooklyn": 50, "Bronx/Queens": 30, "Other": 3 },
          { "year": "Q3-2023", "Manhattan": 35, "Brooklyn": 120, "Bronx/Queens": 110, "Other": 5 },
          { "year": "Q3-2024", "Manhattan": 120, "Brooklyn": 160, "Bronx/Queens": 180, "Other": 25 }
      ],
      summonses: [
          { "year": "Q3-2018", "Manhattan": 1300, "Brooklyn": 800, "Bronx/Queens": 700, "Other": 0 },
          { "year": "Q3-2019", "Manhattan": 2400, "Brooklyn": 1350, "Bronx/Queens": 1450, "Other": 0 },
          { "year": "Q3-2020", "Manhattan": 1800, "Brooklyn": 1150, "Bronx/Queens": 1250, "Other": 0 },
          { "year": "Q3-2021", "Manhattan": 2100, "Brooklyn": 900, "Bronx/Queens": 1450, "Other": 0 },
          { "year": "Q3-2022", "Manhattan": 2150, "Brooklyn": 1050, "Bronx/Queens": 1150, "Other": 0 },
          { "year": "Q3-2023", "Manhattan": 3700, "Brooklyn": 1700, "Bronx/Queens": 2050, "Other": 0 },
          { "year": "Q3-2024", "Manhattan": 3900, "Brooklyn": 1400, "Bronx/Queens": 2300, "Other": 0 }
      ]
  },
  Q4: {
      arrests: [
          { "year": "Q4-2018", "Manhattan": 300, "Brooklyn": 230, "Bronx/Queens": 190, "Other": 8 },
          { "year": "Q4-2019", "Manhattan": 75, "Brooklyn": 90, "Bronx/Queens": 125, "Other": 4 },
          { "year": "Q4-2020", "Manhattan": 22, "Brooklyn": 65, "Bronx/Queens": 32, "Other": 0 },
          { "year": "Q4-2021", "Manhattan": 14, "Brooklyn": 28, "Bronx/Queens": 30, "Other": 2 },
          { "year": "Q4-2022", "Manhattan": 12, "Brooklyn": 55, "Bronx/Queens": 32, "Other": 4 },
          { "year": "Q4-2023", "Manhattan": 40, "Brooklyn": 130, "Bronx/Queens": 115, "Other": 6 },
          { "year": "Q4-2024", "Manhattan": 130, "Brooklyn": 170, "Bronx/Queens": 190, "Other": 28 }
      ],
      summonses: [
          { "year": "Q4-2018", "Manhattan": 1400, "Brooklyn": 850, "Bronx/Queens": 750, "Other": 0 },
          { "year": "Q4-2019", "Manhattan": 2500, "Brooklyn": 1400, "Bronx/Queens": 1500, "Other": 0 },
          { "year": "Q4-2020", "Manhattan": 1900, "Brooklyn": 1200, "Bronx/Queens": 1300, "Other": 0 },
          { "year": "Q4-2021", "Manhattan": 2200, "Brooklyn": 950, "Bronx/Queens": 1500, "Other": 0 },
          { "year": "Q4-2022", "Manhattan": 2250, "Brooklyn": 1100, "Bronx/Queens": 1200, "Other": 0 },
          { "year": "Q4-2023", "Manhattan": 3800, "Brooklyn": 1750, "Bronx/Queens": 2100, "Other": 0 },
          { "year": "Q4-2024", "Manhattan": 4000, "Brooklyn": 1450, "Bronx/Queens": 2350, "Other": 0 }
      ]
    }

};

// Custom button component (no external dependencies)
const Button = ({ children, onClick, isActive }) => (
    <button 
        onClick={onClick} 
        style={{
            padding: "8px 16px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: isActive ? "#007bff" : "#f8f9fa",
            color: isActive ? "#fff" : "#000",
            fontWeight: isActive ? "bold" : "normal",
            transition: "all 0.2s ease-in-out"
        }}
    >
        {children}
    </button>
);

const BarGraph = () => {
    const [selectedQuarter, setSelectedQuarter] = useState("Q1");
    const [selectedDataType, setSelectedDataType] = useState("arrests");

    return (
        <div style={{ width: "100%", height: "650px", textAlign: "center" }}>
            <h2>
                {selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)} per Year (
                {selectedQuarter})
            </h2>

            {/* Quarter selection buttons */}
            <div>
                {Object.keys(quarterlyData).map((quarter) => (
                    <Button
                        key={quarter}
                        onClick={() => setSelectedQuarter(quarter)}
                        isActive={selectedQuarter === quarter}
                    >
                        {quarter}
                    </Button>
                ))}
            </div>

            {/* Data Type Selection (Arrests / Summonses) */}
            <div>
                <Button
                    onClick={() => setSelectedDataType("arrests")}
                    isActive={selectedDataType === "arrests"}
                >
                    Arrests
                </Button>
                <Button
                    onClick={() => setSelectedDataType("summonses")}
                    isActive={selectedDataType === "summonses"}
                >
                    Summonses
                </Button>
            </div>

            {/* Bar Chart */}
            <div style={{ height: 500 }}>
                <ResponsiveBar
                    data={quarterlyData[selectedQuarter][selectedDataType]}
                    keys={["Manhattan", "Brooklyn", "Bronx/Queens", "Other"]}
                    indexBy="year"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: "nivo" }}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45,
                        legend: "Year",
                        legendPosition: "middle",
                        legendOffset: 40
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "Number",
                        legendPosition: "middle",
                        legendOffset: -50
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    legends={[
                        {
                            dataFrom: "keys",
                            anchor: "right",
                            direction: "column",
                            justify: false,
                            translateX: 120,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemsSpacing: 2,
                            symbolSize: 20
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default BarGraph;

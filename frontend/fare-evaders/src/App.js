import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar
import Home from "./pages/Home";
import SubwayAlerts from "./pages/SubwayAlerts";

function App() {
    return (
        <Router>
            <Navbar />  {/* Add Navbar here */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home includes MapComponent */}
                <Route path="/alerts" element={<SubwayAlerts />} />
            </Routes>
        </Router>
    );
}

export default App;

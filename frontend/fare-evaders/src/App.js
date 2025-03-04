import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubwayAlerts from "./pages/SubwayAlerts";
import MapPage from "./pages/MapPage";  // Import MapPage

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alerts" element={<SubwayAlerts />} />
                <Route path="/map" element={<MapPage />} />  {/* New route */}
            </Routes>
        </Router>
    );
}

export default App;

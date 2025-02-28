import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubwayData from "./pages/SubwayData";
import SubwayAlerts from "./pages/SubwayAlerts";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subway" element={<SubwayData />} />
                <Route path="/alerts" element={<SubwayAlerts />} />
            </Routes>
        </Router>
    );
}

export default App;

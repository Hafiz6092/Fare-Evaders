import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar
import Home from "./pages/Home";
import SubwayData from "./pages/SubwayData";
import SubwayAlerts from "./pages/SubwayAlerts";
import NQRWSubwayData from "./pages/NQRWSubwayData";  // Import NQRW Component

function App() {
    return (
        <Router>
            <Navbar />  {/* Add Navbar here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subway" element={<SubwayData />} />
                <Route path="/alerts" element={<SubwayAlerts />} />
                <Route path="/nqrw" element={<NQRWSubwayData />} /> {/* New route */}
            </Routes>
        </Router>
    );
}

export default App;

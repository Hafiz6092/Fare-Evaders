import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubwayAlerts from "./pages/SubwayAlerts";
import MapPage from "./pages/MapPage";
import InfoPage from "./pages/InfoPage";
import Bar from "./pages/Bar";
import Resources from "./pages/Resources";
import TurnstileAnalysis from "./pages/TurnstileAnalysis";
function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/" && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alerts" element={<SubwayAlerts />} />
                {/* <Route path="/map" element={<MapPage />} />  */}
                <Route path="/bar_graph" element={<Bar />} />
                {/* <Route path="/info" element={<InfoPage />} /> */}
                <Route path="/resources" element={<Resources />} />
                <Route path="/turnstile-analysis" element={<TurnstileAnalysis />} />
            </Routes>
        </>
    );
}

export default App;
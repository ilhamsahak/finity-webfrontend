import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Roster } from "./components/Roster";
import { Matches } from "./components/Matches";
import { GameShowcase } from "./components/GameShowcase";
import { Footer } from "./components/Footer";
import { Gamepad2, Monitor, Trophy } from "lucide-react";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Hero />

      <div className="main-content">
        {/* Info Bar */}
        <div className="info-bar">
          <div className="container info-bar-content">
            <span className="info-item"><Gamepad2 style={{ width: '20px', height: '20px' }} /> Infinite</span>
            <span className="info-item"><Trophy style={{ width: '20px', height: '20px' }} /> Discipline</span>
            <span className="info-item"><Monitor style={{ width: '20px', height: '20px' }} /> Dominance</span>
          </div>
        </div>

        <Roster />

        <Matches />

        <GameShowcase />
      </div>

      <Footer />
    </div>
  );
}

export default App;

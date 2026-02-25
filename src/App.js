import "./App.css";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
import Portfolio from "./Components/Portfolio";
import { HashRouter, Routes, Route } from "react-router-dom";
import Project from "./Components/Project";
import Fade from "./Components/Fade";

function App() {
  const [navBackground, setNavBackground] = useState("#428fc2");
  const [navShadow, setNavShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("#1B1B1B");
        setNavShadow("0px 4px 10px rgba(0, 0, 0, 0.5)");
      } else {
        setNavBackground("#428fc2");
        setNavShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <header className="navbar">
          <NavBar navBackground={navBackground} navShadow={navShadow} />
        </header>

        <Fade>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </Fade>
      </div>
    </HashRouter>
  );
}

export default App;

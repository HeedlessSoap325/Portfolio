import './App.css';
import "./css/style.css";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import {Contact} from "./pages/Contact.tsx";
import About from "./pages/About.tsx";

export default function App() {
    return(
        <BrowserRouter>
            <div id="main-container">
                <NavBar />
                <div id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
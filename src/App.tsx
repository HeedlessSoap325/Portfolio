import './App.css';
import "./css/style.css";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import {Contact} from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Project from "./components/Project.tsx";
import {JSX} from "react";
import data from "./assets/projects.json";

function ProjectLoader(): JSX.Element {
    const params = useParams();
    if (!params.id) {
        console.error("Project ID was not specified!");
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return(<Project id={params.id} project_data={data.projects[params.id]} fullscreen={true}/>);
}
export default function App() {
    return(
        <BrowserRouter>
            <div id="main-container">
                <NavBar />
                <div id="main-content">
                    <Routes>
                        <Route path="/Portfolio/" element={<Home />} />
                        <Route path="/Portfolio/projects/" element={<Projects />} />
                        <Route path="/Portfolio/about/" element={<About />} />
                        <Route path="/Portfolio/contact/" element={<Contact />} />
                        <Route path="/Portfolio/project/:id/" element={<ProjectLoader />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
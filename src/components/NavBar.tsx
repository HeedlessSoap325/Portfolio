import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div id="navBar-container">
            <Link to="/Portfolio/" id="navBar-text">Some Text</Link>
            <nav id="navBar-nav">
                <ul id="navBar-links">
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/projects">Projects</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/contact">Contact Me</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/about">About Me</Link></li>
                </ul>
            </nav>
        </div>
    );
}
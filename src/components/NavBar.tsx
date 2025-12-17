import {Link} from "react-router-dom";
import {Language} from "../scripts/lang/translations.ts";
import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";

export default function NavBar({setLanguage}: {setLanguage: React.Dispatch<React.SetStateAction<Language>>}) {
    const {translate} = useTranslation();
    return(
        <div id="navBar-container">
            <Link to="/Portfolio/" id="navBar-text">{translate("nav.home")}</Link>
            <nav id="navBar-nav">
                <ul id="navBar-links">
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/projects">{translate("nav.projects")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/contact">{translate("nav.contact")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" to="/Portfolio/about">{translate("nav.about")}</Link></li>
                    <li className="navbar-item"><button onClick={() => setLanguage("en")}>English</button></li>
                    <li className="navbar-item"><button onClick={() => setLanguage("de")}>Deutsch</button></li>
                </ul>
            </nav>
        </div>
    );
}
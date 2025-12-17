import {Link} from "react-router-dom";
import {availableLanguages, Language} from "../scripts/lang/translations.ts";
import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";
import {ChangeEvent} from "react";

export default function NavBar({setLanguage}: {setLanguage: React.Dispatch<React.SetStateAction<Language>>}) {
    const {translate} = useTranslation();

    function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (availableLanguages.indexOf(event.target.value) !== -1) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setLanguage(event.target.value);
            return;
        }
        setLanguage("en");
    }
    return(
        <div id="navBar-container">
            <Link to="/Portfolio/" id="navBar-text">{translate("nav.home")}</Link>
            <nav id="navBar-nav">
                <ul id="navBar-links">
                    <li className="navbar-item"><Link className="navbar-link"
                                                      to="/Portfolio/projects">{translate("nav.projects")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link"
                                                      to="/Portfolio/contact">{translate("nav.contact")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link"
                                                      to="/Portfolio/about">{translate("nav.about")}</Link></li>


                    <select id="navBar-language-selector" onChange={(e) => changeLanguage(e)}>
                        {availableLanguages.map(language => (
                            <option key={language} value={language}>{translate(language)}</option>
                        ))}
                    </select>

                </ul>
            </nav>
        </div>
    );
}
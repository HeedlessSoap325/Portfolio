import {Link} from "react-router-dom";
import {availableLanguages, Language} from "../scripts/lang/translations.ts";
import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";
import {ChangeEvent, useEffect, useState} from "react";

export default function NavBar({setLanguage}: {setLanguage: React.Dispatch<React.SetStateAction<Language>>}) {
    const {translate} = useTranslation();
    const [isDark, setIsDark] = useState(true);

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

    function toggleBurgerMenu(){
        const navBar = document.getElementById("navBar-nav");
        if (!navBar) return;
        if (window.innerWidth >= 900) return;
        if (navBar.style.display === "flex") {
            navBar.style.display = "none";
        } else {
            navBar.style.display = "flex";
        }
    }

    async function setTheme(theme: "dark" | "light") {
        setIsDark(theme === "dark");
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme !== null){
            setIsDark(theme === "dark");
            document.documentElement.setAttribute("data-theme", theme);
        }else{
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(systemPrefersDark);
            document.documentElement.setAttribute("data-theme", systemPrefersDark ? "dark" : "light");
        }
    }, [])

    return(
        <div id="navBar-container">
            <Link to="/Portfolio/" id="navBar-text">{translate("nav.home")}</Link>
            <a id="navBar-icon" onClick={toggleBurgerMenu}>
                <img src="./hamburger.png" alt="hamburger" loading="eager" fetchPriority="high"/>
            </a>
            <nav id="navBar-nav">
                <ul id="navBar-links">
                    <li className="navbar-item"><Link className="navbar-link" onClick={toggleBurgerMenu}
                                                      to="/Portfolio/projects">{translate("nav.projects")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" onClick={toggleBurgerMenu}
                                                      to="/Portfolio/contact">{translate("nav.contact")}</Link></li>
                    <li className="navbar-item"><Link className="navbar-link" onClick={toggleBurgerMenu}
                                                      to="/Portfolio/about">{translate("nav.about")}</Link></li>


                    <select id="navBar-language-selector" onChange={(e) => changeLanguage(e)}>
                        {availableLanguages.map(language => (
                            <option key={language} value={language}>{translate(language)}</option>
                        ))}
                    </select>

                    <input checked={isDark} type="checkbox" onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}/>
                </ul>
            </nav>
        </div>
    );
}
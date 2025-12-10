export default function About(){
    return(
        <div id="about-container">
            <img id="about-profile" alt="Profile picture" src="./profile.jpg"/>
            <div id="about-info">
                <div id="about-left">
                    <h3 id="about-general" className="about-header">Generell:</h3>
                    <span>
                        Geburtstag: <a id="about-birthday-link" href="https://www.onthisday.com/date/2008/november/20" target="_blank">20.11.2008</a>
                    </span>
                    <span>
                        Heimatort: <a id="about-origin-link" href="https://www.google.com/maps/place/Elgg/@47.4797661,8.8169957,13z/data=!3m1!4b1!4m6!3m5!1s0x479a96ea1e3774f7:0xef4c669b47e2d556!8m2!3d47.4910721!4d8.8665461!16zL20vMGdwMGdz?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" target="_blank">Elgg, ZH</a>
                    </span>
                    <span>
                        Sprachkenntnisse:
                            <ul id="about-languages">
                                <li>
                                    <span><b>Deutsch</b> (Muttersprache)</span>
                                </li>
                                <li>
                                    <span><b>Englisch</b> (gute Kenntnisse)</span>
                                </li>
                                <li>
                                    <span><b>Französisch</b> (Schulkenntnisse)</span>
                                </li>
                            </ul>
                    </span>

                    <h3 id="about-jobs" className="about-header">Berufserfahrung:</h3>
                    <span>
                        Keine
                    </span>
                </div>
                <div id="about-right">
                    <h3 id="about-education" className="about-header">Ausbildung:</h3>
                    <ul id="about-education-list">
                        <li className="about-education-item">
                            <div className="about-education-timespan">
                                2024 - Jetzt
                            </div>
                            <div className="about-education-description">
                                Informatikmittelschule IMS, Kantonschule Büelrain ZH.
                            </div>
                        </li>
                        <li className="about-education-item">
                            <div className="about-education-timespan">
                                2023 - 2024
                            </div>
                            <div className="about-education-description">
                                Wirtschaftsgymnasium, Kantonschule Büelrain ZH. <br/>
                                Nach einem Jahr in die IMS gewechselt.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
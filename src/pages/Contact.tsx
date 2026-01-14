import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";

export function Contact(){
    const {translate} = useTranslation();
    return(
        <div id="contact-container">
            <h2 id="contact-title">{translate("contact.title")}</h2>
            <span id="contact-content">
                {translate("contact.content")}
            </span>
            <div className="section">
                <h3 className="contact-text contact-header">
                    {translate("contact.personal")}
                </h3>
                <span className="contact-text">
                    {translate("contact.discord")} <a className="contact-text contact-link" href="https://discordapp.com/users/811664195518857236" target="_blank">@heedlesssoap325</a>
                </span>
            </div>
            <div className="section">
                <h3 className="contact-text contact-header">
                    {translate("contact.business")}
                </h3>
                <span className="contact-text">
                    {translate("contact.mail")} <a className="contact-text contact-link" href="&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x6D;&#x65;&#x40;&#x68;&#x65;&#x65;&#x64;&#x6C;&#x65;&#x73;&#x73;&#x73;&#x6F;&#x61;&#x70;&#x2E;&#x64;&#x65;&#x76;">&#x6D;&#x65;&#x40;&#x68;&#x65;&#x65;&#x64;&#x6C;&#x65;&#x73;&#x73;&#x73;&#x6F;&#x61;&#x70;&#x2E;&#x64;&#x65;&#x76;</a>
                </span>
            </div>
            <div className="section">
                <h3 className="contact-text contact-header">
                    {translate("contact.other")}
                </h3>
                <span className="contact-text">
                    {translate("contact.github")} <a className="contact-text contact-link" href="https://github.com/HeedlessSoap325" target="_blank">HeedlessSoap325</a>
                </span>
            </div>
        </div>
    );
}
import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";

export default function Footer(){
    const {translate} = useTranslation();
    return(
        <div id="footer-container">
            <h3  className="footer-text" id="footer-copyright">&copy;2025-{new Date().getFullYear()} {translate("footer.copyright")}</h3>
            <h3 className="footer-text" id="footer-source">{translate("footer.source")} <a id="footer-source-link" href="https://github.com/HeedlessSoap325/Portfolio" target="_blank">here</a></h3>
        </div>
    );
}
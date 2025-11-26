export default function Footer(){
    return(
        <div id="footer-container">
            <h3 className="footer-text" id="footer-copyright">&copy;2025-{new Date().getFullYear()} by HeedlessSoap325</h3>
            <h3 className="footer-text" id="footer-source">View the Source Code <a id="footer-source-link" href="https://github.com/HeedlessSoap325/Portfolio" target="_blank">here</a></h3>
        </div>
    );
}
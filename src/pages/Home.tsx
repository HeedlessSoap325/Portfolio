import {JSX} from "react";
import {useTranslation} from "../scripts/lang/TranslationProvider.tsx";

export default function Home(): JSX.Element {
    const {translate} = useTranslation();
    return(
        <div id="home-container">
            <h2 id="home-introduction">{translate("home.title")}</h2>
            <span id="home-content">{translate("home.content")}</span>
        </div>
    );
}
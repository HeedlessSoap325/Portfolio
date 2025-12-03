import {projectData} from "../scripts/typedefs.ts";
import onClickProject from "../scripts/events.ts";
import {useEffect} from "react";

export default function Project({project_data, fullscreen = false, id} : {project_data: projectData, fullscreen?: boolean, id: number}) {
    function loadContent(){
        const content = document.createElement( "div" );
        content.innerHTML = project_data.content;

        const container = document.getElementById("project-container");
        container?.appendChild(content);
    }

    useEffect(() => {
        loadContent();
    }, []);

    if (!fullscreen) {
        return(
            <div className="project-cover" onClick={() => onClickProject(id)}>
                <img className="project-cover-img" src={project_data.cover_image} alt="test" />
                <h4 className="project-cover-title">{project_data.cover_title}</h4>
                <p className="project-cover-description">{project_data.cover_description}</p>
            </div>
        );
    }else {
        return (
            <div id="project-container" className="project-fullscreen">
                <h4 className="project-fullscreen-title">{project_data.title}</h4>
            </div>
        );
    }
}
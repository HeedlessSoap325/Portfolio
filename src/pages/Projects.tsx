import Project from "../components/Project.tsx";
import data from "../assets/projects.json";
import {projectData} from "../scripts/typedefs.ts";
export default function Projects() {
    return (
        <div id="projects-container">
            {
                data.projects.map((project: projectData, idx: number)=> (
                    <Project id={idx} key={idx} project_data={project} />
                ))
            }
        </div>
    );
}
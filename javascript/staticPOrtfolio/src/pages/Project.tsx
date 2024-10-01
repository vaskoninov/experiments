import projects from "../assets/projects.json";
import SingleProject from "../components/SingleProject";

console.log(projects);

export default function Project() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {projects &&
                projects.map((project) => (
                    <div key={project.id}>
                        <SingleProject {...project} />
                    </div>
                ))}
        </div>
    );
}

import projects from "../assets/projects.json";
import SingleProject from "../components/SingleProject";

console.log(projects);

export default function Project() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl p-10">Projects</h1>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {projects &&
                    projects.map((project) => (
                        <div key={project.id}>
                            <SingleProject {...project} />
                        </div>
                    ))}
            </div>
        </>
    );
}

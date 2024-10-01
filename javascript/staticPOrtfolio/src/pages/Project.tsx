import projects from "../assets/projects.json";
import SingleProject from "../components/projectComponents/SingleProject";

console.log(projects);

export default function Project() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl p-10">Projects</h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {projects &&
                        projects.map((project) => (
                            <div key={project.id}>
                                <SingleProject {...project} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

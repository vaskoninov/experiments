import { useState } from "react";
import projects from "../assets/projects.json";
import SingleProject from "../components/projectComponents/SingleProject";

console.log(projects);

export default function Project() {
    const [hoveredCardId, setHoveredId] = useState<number | null>(null);

    const handleMouseIn = (id: number) => {
        setHoveredId(id);
    };

    const handleMouseOut = () => {
        setHoveredId(null);
    };
    return (
        <div className="flex flex-col items-center w-full bg-customBg">
            <h1 className="text-center font-bold text-3xl p-10">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-8 w-full">
                {projects &&
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className={`flex items-center justify-center hover:scale-110 hover: transition-all duration-300 ease-in-out m-4 ${
                                hoveredCardId !== null &&
                                hoveredCardId !== project.id
                                    ? "opacity-20"
                                    : "opacity-100"
                            }`}
                            onMouseEnter={() => handleMouseIn(project.id)}
                            onMouseLeave={handleMouseOut}
                        >
                            <SingleProject {...project} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

import Languages from "./Languages";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import Summary from "./Summary";
import Technologies from "./Technologies";

type SingleProject = {
    id: Number;
    name: string;
    languages: string[];
    technologies: string[];
    resume: string;
    image?: string;
};

export default function SingleProject({
    // id,
    name,
    languages,
    technologies,
    resume,
    image,
}: SingleProject) {
    return (
        <div className="container flex flex-col min-w-72 min-h-[500px] p-4 bg-purple-50 shadow-md border border-slate-200 rounded-lg max-w-sm">
            <ProjectTitle title={name} />
            <ProjectImage projectImage={image} />
            <div className="flex flex-row gap-2 mb-2 justify-between">
                <Languages languages={languages} />
                <Technologies technologies={technologies} />
            </div>
            <Summary summary={resume} />
        </div>
    );
}

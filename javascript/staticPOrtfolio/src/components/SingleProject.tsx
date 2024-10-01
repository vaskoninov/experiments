type SingleProject = {
    id: Number;
    name: string;
    languages: string[];
    technologies: string[];
    resume: string;
};

export default function SingleProject({
    // id,
    name,
    languages,
    technologies,
    resume,
}: SingleProject) {
    return (
        <div className="container flex flex-col min-w-72 min-h-full p-4 bg-purple-50 shadow-md border border-slate-200 rounded-lg max-w-sm">
            <h1 className="text-center text-slate-900 font-bold text-xl p-2 underline">
                {name}
            </h1>
            <div className="flex flex-row">
                <div>
                    <h3 className="text-slate-800 font-light text-lg p-2">
                        Used Languages:
                    </h3>
                    <ul>
                        {languages.map((language, index) => (
                            <li
                                className="font-thin text-slate-700 text-base"
                                key={index}
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
                {technologies.length > 0 && (
                    <div>
                        <h3 className="text-slate-800 font-light text-lg p-2">
                            Used Technologies:
                        </h3>
                        <ul>
                            {technologies.map((tech, index) => (
                                <li
                                    className="font-thin text-slate-700 text-base"
                                    key={index}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-slate-800 font-light text-lg p-2">
                    Summary:
                </h3>
                <p className="font-thin text-slate-700 text-base">{resume}</p>
            </div>
        </div>
    );
}

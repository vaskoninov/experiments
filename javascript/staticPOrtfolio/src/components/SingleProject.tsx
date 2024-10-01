type SingleProject = {
    id: Number;
    name: string;
    languages: string[];
    technologies: string[];
};

export default function SingleProject({
    // id,
    name,
    languages,
    technologies,
}: SingleProject) {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h3>Used Languages:</h3>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
            {technologies.length > 0 && (
                <div>
                    <h3>Used Technologies:</h3>
                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

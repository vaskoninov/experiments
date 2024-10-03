type Technologies = {
    technologies: string[];
};

export default function Technologies({ technologies }: Technologies) {
    if (!technologies || technologies.length == 0) {
        return;
    }
    return (
        <>
            <div>
                <h3 className="text-slate-800 font-light text-lg mb-1">
                    Тechnologies:
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
        </>
    );
}

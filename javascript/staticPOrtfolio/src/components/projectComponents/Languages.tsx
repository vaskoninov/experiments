type Languages = {
    languages: string[];
};

export default function Languages({ languages }: Languages) {
    if (!languages || languages.length == 0) return;

    return (
        <div>
            <h3 className="text-slate-800 font-light text-lg mb-1">
                Languages:
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
    );
}

type Summary = {
    summary: string;
};

export default function Summary({ summary }: Summary) {
    return (
        <div>
            <h3 className="text-slate-800 font-light text-md mb-2">Summary:</h3>
            <p className="font-thin text-slate-700 text-base">{summary}</p>
        </div>
    );
}

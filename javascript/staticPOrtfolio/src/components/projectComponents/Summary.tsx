type SummaryProps = {
    summary: string;
    isExpanded: boolean;
    toggleExpanded: () => void;
};

export default function Summary({
    summary,
    isExpanded,
    toggleExpanded,
}: SummaryProps) {
    return (
        <div>
            <div
                className={`relative overflow-hidden ${
                    isExpanded ? "max-h-none" : "max-h-[150px]"
                } transition-all duration-300 ease-in-out`}
            >
                <h3 className="text-slate-800 font-light text-md mb-2">
                    Summary:
                </h3>
                <p className="font-thin text-slate-700 text-base">{summary}</p>
            </div>
            {summary.length > 250 && (
                <button
                    className="mt-4 text-blue-500 hover:text-blue-700"
                    onClick={toggleExpanded}
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
        </div>
    );
}

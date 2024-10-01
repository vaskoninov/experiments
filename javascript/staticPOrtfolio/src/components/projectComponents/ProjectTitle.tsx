type Title = {
    title: string;
};

export default function ProjectTitle({ title }: Title) {
    return (
        <h1 className="text-center text-slate-900 font-bold text-xl p-2 underline">
            {title}
        </h1>
    );
}

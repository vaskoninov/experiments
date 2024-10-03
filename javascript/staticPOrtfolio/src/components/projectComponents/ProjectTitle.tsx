type TitleProps = {
    title: string;
    url?: string;
};

export default function ProjectTitle({ title, url }: TitleProps) {
    return (
        <a href={url}>
            <h1 className="text-center text-slate-900 font-bold text-xl p-2 underline">
                {title}
            </h1>
        </a>
    );
}

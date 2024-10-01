type Image = {
    projectImage?: string;
};

export default function ProjectImage({ projectImage }: Image) {
    if (!projectImage || projectImage === "") return;
    return (
        <img
            src={projectImage}
            alt="visual representation of the app"
            className="border border-slate-200 rounded mb-1"
        />
    );
}

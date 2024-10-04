type Image = {
    projectImage?: string;
};

export default function ProjectImage({ projectImage }: Image) {
    if (!projectImage || projectImage === "") return;
    return (
        <div className="relative w-full pb-[56.25%] mb-4">
            <img
                src={projectImage}
                alt="visual representation of the app"
                className="absolute top-0 left-0 w-full h-full object-contain rounded border-2"
            />
        </div>
    );
}

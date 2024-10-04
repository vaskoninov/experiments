export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row w-full flex-1 bg-customBg">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                <img
                    src="/images/personal.jpg"
                    alt="My personal photo"
                    className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover shadow-lg rounded-lg"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start bg-slate-500  p-6 md:p-8 lg:p-12">
                <strong className="text-left mb-4 text-2xl md:text-3xl xl:text-4xl text-secondBG">
                    Hello, my name is Vasil Ninov
                </strong>
                <p className="text-left mb-4 text-base md:text-lg lg:text-xl ">
                    With over two decades of experience in education, I’ve
                    recently transitioned into software development, driven by a
                    passion for technology and problem-solving. My education at
                    Software University (SoftUni) provided me with a strong
                    foundation in Python, Django, PostgreSQL, and front-end
                    technologies, which I am excited to apply to real-world
                    projects.
                </p>
                <p className="text-left mb-4 text-base md:text-lg lg:text-xl">
                    Previously, I served as Assistant Dean of Students and Tech
                    Committee Chair at the American College of Sofia. These
                    roles honed my skills in leadership, project management, and
                    implementing tech initiatives. By combining these
                    experiences with my technical skills, I aim to create
                    thoughtful, impactful solutions in the tech industry.
                </p>
                <p className="text-left text-base md:text-lg lg:text-xl">
                    I believe that my unique blend of technical skills and
                    extensive background in education and administration allows
                    me to bring a fresh perspective to software development. I
                    am eager to collaborate on projects that not only solve
                    problems but do so with creativity and user-centric design.
                </p>
            </div>
        </div>
    );
}

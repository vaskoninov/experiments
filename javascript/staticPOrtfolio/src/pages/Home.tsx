export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row w-full flex-1">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                <img
                    src="/images/personal.jpg"
                    alt="My personal photo"
                    className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover shadow-lg rounded-lg"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start bg-slate-500 text-customBg p-6 md:p-8 lg:p-12">
                <strong className="text-left mb-4 text-2xl md:text-3xl xl:text-4xl">
                    Hello, My name is Vasil Ninov
                </strong>
                <p className="text-left mb-4 text-base md:text-lg lg:text-xl">
                    After two decades of experience in education, I made the
                    exciting transition to the world of software development. My
                    background as a history teacher and assistant dean has honed
                    my skills in project management, communication, and
                    problem-solving. Now, as an aspiring Python developer, I aim
                    to blend creativity with technical precision. I'm passionate
                    about leveraging my skills to contribute to innovative
                    projects, and I’m eager to learn and grow in this dynamic
                    industry.
                </p>
                <p className="text-left mb-4 text-base md:text-lg lg:text-xl">
                    I’ve completed several courses and certifications that
                    solidify my technical foundation, including CS50
                    Introduction to Programming with Python, DevOps and Agile
                    Foundations, and advanced Python modules. I am also
                    comfortable working with Django, PostgreSQL, and front-end
                    basics like HTML, CSS, and JavaScript. Combining these newly
                    developed skills with my extensive experience in teaching
                    and managing student programs, I offer a unique perspective
                    and a well-rounded approach to problem-solving in tech
                    environments.
                </p>
                <p className="text-left text-base md:text-lg lg:text-xl">
                    I believe in building solutions that not only work but are
                    designed thoughtfully and thoroughly. My journey into IT is
                    driven by curiosity, a commitment to lifelong learning, and
                    a desire to create a positive impact through technology.
                    Let’s connect and build the future together.
                </p>
            </div>
        </div>
    );
}

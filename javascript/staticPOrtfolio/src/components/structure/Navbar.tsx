import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex p-2 bg-slate-800">
            <div className="flex flex-1 gap-4">
                <Link
                    className="text-secondBG text-xl hover:bg-secondBG hover:text-slate-800 p-2"
                    to="/"
                >
                    Home
                </Link>
                {/* <Link
                    className="text-secondBG text-xl p-2 hover:bg-customBg hover:text-slate-800"
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="text-secondBG text-xl p-2  hover:bg-customBg hover:text-slate-800"
                    to="/contacts"
                >
                    Contacts
                </Link> */}
                <Link
                    className="text-secondBG text-xl p-2  hover:bg-secondBG hover:text-slate-800"
                    to="/projects"
                >
                    Projects
                </Link>
            </div>
            <div className="flex gap-4">
                <a
                    className="text-secondBG  text-xl p-2  hover:bg-secondBG hover:text-slate-800"
                    href="https://www.linkedin.com/in/vasil-ninov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="text-secondBG text-xl p-2  hover:bg-secondBG hover:text-slate-800"
                    href="https://github.com/vaskoninov"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </nav>
    );
}

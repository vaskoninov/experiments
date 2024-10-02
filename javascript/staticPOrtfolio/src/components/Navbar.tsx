import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex p-2 bg-slate-500">
            <div className="flex flex-1 gap-4">
                <Link
                    className="text-slate-50 text-xl hover:bg-customBg hover:text-slate-800 p-2"
                    to="/"
                >
                    Home
                </Link>
                {/* <Link
                    className="text-slate-50 text-xl p-2 hover:bg-customBg hover:text-slate-800"
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className="text-slate-50 text-xl p-2  hover:bg-customBg hover:text-slate-800"
                    to="/contacts"
                >
                    Contacts
                </Link> */}
                <Link
                    className="text-slate-50 text-xl p-2  hover:bg-customBg hover:text-slate-800"
                    to="/projects"
                >
                    Projects
                </Link>
            </div>
            <div className="flex gap-4">
                <a
                    className="text-slate-50  text-xl p-2  hover:bg-customBg hover:text-slate-800"
                    href="https://www.linkedin.com/in/vasil-ninov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="text-slate-50 text-xl p-2  hover:bg-customBg hover:text-slate-800"
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

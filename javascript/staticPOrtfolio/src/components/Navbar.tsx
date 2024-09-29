import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
}

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>

            <h2>KanbanBoard</h2>

            <div className="links">

                <Link to="/">Home</Link>

                <Link to="/dashboard">Dashboard</Link>

                <Link to="/login">Login</Link>

                <Link to="/signup">Sign Up</Link>

            </div>

        </nav>
    );
}
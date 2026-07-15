import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div>
            <nav>
                <h2>KanbanBoard</h2>

                <div>
                    <Link to="/">Home</Link>

                    {/* <Link to="/features">Features</Link>

                    <Link to="/about">About</Link> */}

                    <Link to="/login">Login</Link>

                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}
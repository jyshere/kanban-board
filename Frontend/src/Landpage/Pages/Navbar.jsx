import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ isLogin, user, onLogout }) {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/" className="nav-logo">
                <span className="nav-logo-icon">
                    ▮▮▮
                </span>

                <span className="nav-logo-text">
                    KanbanBoard
                </span>
            </Link>


            {/* Navigation */}
            <div className="links">

                {/* Home */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </NavLink>


                {/* Logged-in navigation */}
                {isLogin && (
                    <>
                        {/* Dashboard */}
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Dashboard
                        </NavLink>


                        {/* Profile */}
                        <div className="profile-container">

                            <button
                                className="profile-btn"
                                onClick={() => setShowProfile(!showProfile)}
                            >
                                Profile
                                <span className="profile-arrow">
                                    {showProfile ? "↑" : "↓"}
                                </span>
                            </button>


                            {showProfile && (
                                <div className="profile-dropdown">
                                    <p className="profile-email">
                                        {user?.email || "User"}
                                    </p>
                                </div>
                            )}

                        </div>


                        {/* Logout */}
                        <button
                            className="nav-btn logout-btn"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </>
                )}

            </div>
        </nav>
    );
}
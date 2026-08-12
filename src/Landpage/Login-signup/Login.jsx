import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Backend API call will come here later

        console.log({
            email,
            password,
        });
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <h1>Login</h1>
                <p>Welcome back! Login to continue.</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Create Account</Link>
                </p>

            </div>

        </div>
    );
}
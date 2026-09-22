import { useState } from "react";
import { sendOTP, verifyOTP } from "../../services/authService";
import { useNavigate } from "react-router-dom";  
import "./Login.css";

export default function Login({ setIsLogin }) {
  const navigate = useNavigate();    
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      await sendOTP(email);
      setOtpSent(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) return;
    setLoading(true);
    setError("");
    try {
      await verifyOTP(email, otp);
      setIsLogin(true);
      navigate("/");  
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>{otpSent ? "Enter OTP" : "Login"}</h1>
        <p>
          {otpSent
            ? `OTP sent to ${email}`
            : "Enter your email and we'll send you a login code."}
        </p>

        <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}>
          {!otpSent ? (
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
          ) : (
            <div className="input-group">
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
          )}

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : otpSent ? "Verify & Login" : "Send OTP"}
          </button>
        </form>

        {otpSent && (
          <button
            type="button"
            className="login-back-btn"
            onClick={() => { setOtpSent(false); setOtp(""); }}
          >
            Change Email
          </button>
        )}
      </div>
    </div>
  );
}
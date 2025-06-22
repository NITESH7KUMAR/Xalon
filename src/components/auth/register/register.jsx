import React, { useState } from "react";
import axios from "axios";
import "./register.css";

function Register({ onClose, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    axios
      .post("https://xalon-backend.onrender.com/api/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.message) {
          alert(response.data.message);
          onClose();
          onSwitchToLogin(); // show login modal
        } else {
          alert("Unexpected server response.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Signup error:", error);
        setError("Signup failed. Please try again.");
      });
  };

  return (
    <div className="modal-overlay">
      <div className="register-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <span className="acc-reg">
          Already have an account?{" "}
          <span className="register-link" onClick={onSwitchToLogin}>
            Login
          </span>
        </span>
      </div>
    </div>
  );
}

export default Register;
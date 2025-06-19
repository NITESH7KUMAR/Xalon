import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ onClose, onLogin, onSwitchToRegister }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8000/Login.php", {
        identifier,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          alert("Welcome back!");
          localStorage.setItem("username", response.data.username);
          onLogin();
          onClose();
          navigate("/");
        } else {
          alert(response.data.message || "Invalid credentials.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Login error:", error);
        alert("An error occurred during login.");
      });
  };

  return (
    <div className="modal-overlay">
      <div className="login-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username or Email:
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <span className="acc-reg">
          Don’t have an account?{" "}
          <span className="register-link" onClick={onSwitchToRegister}>
            Register
          </span>
        </span>
      </div>
    </div>
  );
}

export default Login;
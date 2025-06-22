// src/components/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminLogin({ onAdminLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://xalon-backend.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("username", "admin");
        localStorage.setItem("userType", "admin");
        onAdminLogin("admin", "admin");
        navigate("/admin/dashboard");
      } else {
        alert("❌ Invalid admin credentials");
      }
    } catch (err) {
      alert("⚠️ Error logging in as admin");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>👨‍💼 Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">🔐 Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
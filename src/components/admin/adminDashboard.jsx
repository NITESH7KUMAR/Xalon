import React, { useEffect, useState } from "react";
import "./adminDashboard.css";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("https://xalon-backend.onrender.com/api/myappointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      alert("Failed to fetch appointments");
    }
  };

  const updateStatus = async (id, status) => {
    const route = status === "Accepted" ? "accept" : "reject";
    try {
      const res = await fetch(`https://xalon-backend.onrender.com/api/admin/${route}/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        fetchAppointments();
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>👨‍💼 Admin - Manage Appointments</h2>
      {appointments.map((a, idx) => (
        <div key={idx} className="appointment-card">
          <p><strong>Name:</strong> {a.name}</p>
          <p><strong>Email:</strong> {a.email}</p>
          <p><strong>Phone:</strong> {a.phone}</p>
          <p><strong>Date:</strong> {a.date}</p>
          <p><strong>Time:</strong> {a.time}</p>
          <p><strong>Services:</strong> {a.services.join(", ")}</p>
          <p><strong>Status:</strong> 
            <span className={`status-tag ${a.status.toLowerCase()}`}>
              {a.status}
            </span>
          </p>

          {a.status === "Pending" && (
            <div className="button-group">
              <button onClick={() => updateStatus(a._id, "Accepted")} className="accept-btn">✅ Accept</button>
              <button onClick={() => updateStatus(a._id, "Rejected")} className="reject-btn">❌ Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
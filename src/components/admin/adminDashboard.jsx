import React, { useEffect, useState } from "react";
import "./adminDashboard.css";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from backend
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

  // Accept/Reject appointment and update status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`https://xalon-backend.onrender.com/api/admin/${status.toLowerCase()}/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        fetchAppointments(); // refresh list
      } else {
        alert("❌ Failed to update status");
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>👨‍💼 Admin Dashboard - Manage Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        appointments.map((a, idx) => (
          <div key={idx} className="appointment-card">
            <p><strong>Name:</strong> {a.name}</p>
            <p><strong>Email:</strong> {a.email}</p>
            <p><strong>Phone:</strong> {a.phone}</p>
            <p><strong>Date:</strong> {a.date}</p>
            <p><strong>Time:</strong> {a.time}</p>
            <p><strong>Status:</strong> {a.status}</p>
            <p><strong>Services:</strong> {a.services.join(", ")}</p>

            {a.status === "Pending" && (
              <div className="admin-actions">
                <button onClick={() => updateStatus(a._id, "Accepted")} className="accept-btn">✅ Accept</button>
                <button onClick={() => updateStatus(a._id, "Rejected")} className="reject-btn">❌ Reject</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
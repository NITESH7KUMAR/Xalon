import React, { useEffect, useState } from "react";
import "./appointments.css";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://xalon-backend.onrender.com/api/myappointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        alert("❌ Failed to load appointments.");
      }
    };

    fetchData();
  }, []);

  const handleCancel = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this appointment?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://xalon-backend.onrender.com/api/appointments/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setAppointments((prev) => prev.filter((a) => a._id !== id));
        alert("✅ Appointment cancelled.");
      } else {
        alert("❌ Failed to cancel appointment.");
      }
    } catch (err) {
      alert("❌ Error cancelling: " + err.message);
    }
  };

  return (
    <div className="my-appointments-container">
      <h2>📋 My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments found.</p>
      ) : (
        appointments.map((a, idx) => (
          <div key={idx} className="appointment-card">
            <p><strong>Name:</strong> {a.name}</p>
            <p><strong>Email:</strong> {a.email}</p>
            <p><strong>Phone:</strong> {a.phone}</p>
            <p><strong>Date:</strong> {a.date}</p>
            <p><strong>Time:</strong> {a.time}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={`appointment-status ${a.status.toLowerCase()}`}>
                {a.status}
              </span>
            </p>
            <p><strong>Services:</strong> {a.services.join(", ")}</p>

            <button
              className="cancel-btn"
              onClick={() => handleCancel(a._id)}
            >
              ❌ Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyAppointments;
import React, { useEffect, useState } from "react";
import "./appointments.css";
function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:10000/myappointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        alert("Failed to load appointments.");
      }
    };

    fetchData();
  }, []);

  return (
   <div className="my-appointments-container">
  <h2>📋 My Appointments</h2>
  {appointments.length === 0 ? (
    <p className="no-appointments">No appointments found.</p>
  ) : (
    appointments.map((a, idx) => (
      <div key={idx} className="appointment-card">
        <p><strong>Name:</strong> {a.name}</p>
        <p><strong>Phone:</strong> {a.phone}</p>
        <p><strong>Date:</strong> {a.date}</p>
        <p><strong>Time:</strong> {a.time}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`appointment-status ${a.status === "pending" ? "pending" : "accepted"}`}>
            {a.status}
          </span>
        </p>
        <p><strong>Services:</strong> {a.services.join(", ")}</p>
      </div>
    ))
  )}
</div>
  );
}

export default MyAppointments;
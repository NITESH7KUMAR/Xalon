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

    const sorted = data.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB - dateA; 
    });

    setAppointments(sorted);
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
    <div className="admin-dashboard-table-container">
      <h2>👨‍💼 Admin - Manage Appointments</h2>
      <div className="table-wrapper">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Services</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, idx) => (
              <tr key={idx}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.services.join(", ")}</td>
                <td>
                  <span className={`status-tag ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>
                <td>
                  {a.status === "Pending" ? (
                    <>
                      <button
                        onClick={() => updateStatus(a._id, "Accepted")}
                        className="accept-btn"
                      >
                      Accept
                      </button>
                      <button
                        onClick={() => updateStatus(a._id, "Rejected")}
                        className="reject-btn"
                      >
                      Reject
                      </button>
                    </>
                  ) : (
                    <em>No actions</em>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
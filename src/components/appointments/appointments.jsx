import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import "./appointments.css";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://xalon-backend.onrender.com/api/myappointments"
        );
        const data = await res.json(); // Sort by most recent date first

        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setAppointments(data);
      } catch (err) {
        alert("Failed to load appointments.");
      }
    };

    fetchData();
  }, []);

  const handleCancel = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `https://xalon-backend.onrender.com/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setAppointments((prev) => prev.filter((a) => a._id !== id));
        alert("Appointment cancelled.");
      } else {
        alert("Failed to cancel appointment.");
      }
    } catch (err) {
      alert("Error cancelling: " + err.message);
    }
  };

  return (
    <div className="my-appointments-container">
      <h2>
        <FaClipboardList className="icon1" /> My Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Services</th>
                <th>Action</th>
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
                  <td>
                    <span
                      className={`appointment-status ${a.status.toLowerCase()}`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td>{a.services.join(", ")}</td>
                  <td>
                    <button
                      className="cancel-btn"
                      onClick={() => handleCancel(a._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;

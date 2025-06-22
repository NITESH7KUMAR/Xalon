import React, { useState } from "react";
import "./book.css";

function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    gender: "",
    services: [],
  });

  const servicesByGender = {
    male: ["Haircut", "Beard Grooming", "Hair Spa"],
    female: ["Hair Styling", "Makeup", "Facial"],
    children: ["Kids Haircut", "Mini Facial"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:10000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, status: "Pending" }),
      });
      if (res.ok) {
        alert("✅ Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          date: "",
          time: "",
          gender: "",
          services: [],
        });
      } else {
        alert("❌ Booking failed!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="book-form-container">
      <h2>🗓️ Book Appointment</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="children">Children</option>
        </select>

        {formData.gender && (
          <div className="services-group">
            <label>Choose Services:</label>
            {servicesByGender[formData.gender].map((service) => (
              <label key={service} className="checkbox-label">
                <input
                  type="checkbox"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                />
                {service}
              </label>
            ))}
          </div>
        )}
        <button type="submit">📩 Confirm Appointment</button>
      </form>
    </div>
  );
}

export default BookPage;

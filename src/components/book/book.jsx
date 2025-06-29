import React, { useState } from "react";
import "./book.css";

function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      const res = await fetch(`https://xalon-backend.onrender.com/api/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, status: "Pending" }),
      });

      if (res.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          gender: "",
          services: [],
        });
      } else {
        const errData = await res.json();
        alert("Booking failed! " + (errData?.message || ""));
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
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} type="email" required />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="modern-date" required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} className="small-select" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="children">Children</option>
        </select>

        {formData.gender && (
          <div className="services-group">
            <label>Choose Services:</label>
            <div className="checkbox-button-container">
              {servicesByGender[formData.gender].map((service) => (
                <label
                  key={service}
                  className={`checkbox-button ${
                    formData.services.includes(service) ? "checked" : ""
                  }`}
                >
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
          </div>
        )}

        <button type="submit" className="submit-small">Book</button>
      </form>
    </div>
  );
}

export default BookPage;
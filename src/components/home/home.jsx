import React from "react";
import "./home.css";
import Footer from "../footer/footer";
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>
          Welcome to <span className="brand">Xalon</span> - Where Beauty begins
        </h1>
        <p>Your One-Stop Destination for Hair, Skin & Style</p>
        <button className="book-btn">Book Now</button>
      </section>

      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/assets/logo.png" alt="Hair Styling" />
            <h3>Hair Styling & Haircuts</h3>
          </div>
          <div className="service-card">
            <img src="/assets/logo.png" alt="Hair Color" />
            <h3>Hair Color & Treatments</h3>
          </div>
          <div className="service-card">
            <img src="/assets/logo.png" alt="Facials" />
            <h3>Skin Care & Facials</h3>
          </div>
          <div className="service-card">
            <img src="/assets/logo.png" alt="Makeup" />
            <h3>Bridal & Party Makeup</h3>
          </div>
          <div className="service-card">
            <img src="/assets/logo.png" alt="Manicure" />
            <h3>Manicure & Pedicure</h3>
          </div>
          <div className="service-card">
            <img src="/assets/logo.png" alt="Spa" />
            <h3>Spa & Massage</h3>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🏆 Certified Professionals</li>
          <li>🛋️ Clean & Luxurious Ambience</li>
          <li>💰 Affordable Packages</li>
          <li>🌿 High-Quality Organic Products</li>
          <li>📅 Online Booking Available</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Clients Say</h2>
        <blockquote>
          “The best salon experience I’ve ever had. Loved the ambience and
          professionalism!”
          <br />
          <span>- Nitesh Kumar</span>
        </blockquote>
        <blockquote>
          “I went for a haircut and came out with a new look and boosted
          confidence!”
          <br />
          <span>- Sachin Bhanu</span>
        </blockquote>
      </section>

      <section className="contact">
        <h2>Visit Us Today!</h2>
        <p>
          Step into <strong>Xalon</strong> and step out as the best version of
          yourself.
        </p>
        <p> LPU </p>
        <p>📞 Call: 9876543210</p>
        <button className="book-btn">Book Now</button>
      </section>
      <Footer />
    </div>
  );
}
export default Home;

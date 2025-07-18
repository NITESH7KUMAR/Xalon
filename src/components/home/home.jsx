import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaLandmark } from 'react-icons/fa';
import "./home.css";
import Footer from "../footer/footer";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";
import TestimonialsSlider from "./testimonialSlider/TestimonialSlider";

function Home({ loggedIn, onLoginClick }) {
  const navigate = useNavigate();

  const handleBook = () => {
    if (loggedIn) {
      navigate("/book");
    } else {
      onLoginClick(); // Open login modal
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>
          Welcome to <span className="brand">Xalon</span> - Where Beauty begins
        </h1>
        <p>Your One-Stop Destination for Hair, Skin & Style</p>
        <button className="book-btn" onClick={handleBook}>Book Now</button>
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
            <img src="/assets/logo.png" alt="Spa" />
            <h3>Spa & Massage</h3>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <WhyChooseUs/>
      </section>

      <section className="testimonials">
        <TestimonialsSlider />
      </section>

      <section className="home-contact">
        <h2>Visit Us Today!</h2>
        <p>
          Step into <strong>Xalon</strong> and step out as the best version of
          yourself.
        </p>
        <p><FaLandmark className="icon" /> LPU</p>
        <p><FaPhone className="icon" /> Call: 9876543210</p>
        <button className="book-btn" onClick={handleBook}>Book Now</button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
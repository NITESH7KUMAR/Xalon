import React, { useEffect } from 'react';
import {FaAward, FaCouch, FaMoneyBillWave, FaLeaf, FaCalendarCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './whyChooseUs.css'; 

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons-grid">
        <div className="reason-card" data-aos="fade-up">
          <FaAward className="icon" />
          <span>Certified Professionals</span>
        </div>
        <div className="reason-card" data-aos="fade-up">
          <FaCouch className="icon" />
          <span>Clean & Luxurious Ambience</span>
        </div>
        <div className="reason-card" data-aos="fade-up">
          <FaMoneyBillWave className="icon" />
          <span>Affordable Packages</span>
        </div>
        <div className="reason-card" data-aos="fade-up">
          <FaLeaf className="icon" />
          <span>High-Quality Organic Products</span>
        </div>
        <div className="reason-card" data-aos="fade-up">
          <FaCalendarCheck className="icon" />
          <span>Online Booking Available</span>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

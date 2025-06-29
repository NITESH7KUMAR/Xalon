import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import './contact.css';
import Footer from '../footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4a9yfup",       // ✅ Replace with your EmailJS service ID
        "template_2tpurcj",      // ✅ Replace with your EmailJS template ID
        formRef.current,
        "Tjre9B3vhQcw3mLQs"      // ✅ Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
          console.error("EmailJS error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <div className='contact'>
        <h1>Contact Us</h1>
        <h4>We Build, Create and Deliver</h4>
        <p>We strive to provide excellent service and meet your expectations.</p>
        <p>Feel free to reach out to us with any questions or inquiries.</p>

        <div className='deatil'>
          <p>📞 Phone: +91 6002207736</p>
          <p>✉️ Email: nitesh7kumar.dev@gmail.com</p>
        </div>

        <div className='social-media'>
          <a href="https://facebook.com/nitesh.kumar.843882" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com/nitesh.kumar.843882" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com/1_bhaiya_ji" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://linkedin.com/in/nitesh7kumar" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <h3>📍 Our Address</h3>
        <p>123 Main St, LPU, Punjab</p>

        <div className='contact-form'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input 
              type='text' 
              name='name' 
              placeholder='Your Name' 
              required 
              value={formData.name}
              onChange={handleChange} 
            />
            <input 
              type='email' 
              name='email' 
              placeholder='Your Email' 
              required 
              value={formData.email}
              onChange={handleChange} 
            />
            <textarea 
              name='message' 
              rows='5' 
              placeholder='Your Message' 
              required 
              value={formData.message}
              onChange={handleChange} 
            />
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="sending"><span className="spinner" /> Sending...</span>
              ) : (
                <span className="send-btn">Send Message <Send size={16} /></span>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
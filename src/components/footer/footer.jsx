import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({top:0 ,behavior:'smooth'});       
    };
    return (
        <div className="footer">
            <footer>
              <div className="foot-panel1" onClick={scrollTop}>
                       <p> Back to Top</p>
                </div>
           
                <div className="foot-panel2">
                    <ul>
                        <p>Get to know Us</p>
                        <a href="Home">Home</a>
                        <a href="About">About Us</a>
                        <a href="Work">Work</a>
                    </ul>

                    <ul className='contect'>
                        <p>Connect with Us</p>
                        <a href="#facebook">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="#twitter">
                            <i className="fab fa-twitter "></i> Twitter
                        </a>
                        <a href="#instagram">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#linkedin">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </ul>
                    <ul>
                        <p>Our Services</p>
                        <a href="#order-medicine">Advertisement</a>
                        <a href="#healthcare-products">Development</a>
                        <a href="#lab-tests">Product Testing</a>
                        <a href="#collection-centre">Collection Centre</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a href="#your-account">Contact Us</a>
                        <a href="#returns">Feedback</a>
                        <a href="#purchase-protection">Purchase Protection</a>
                        <a href="#help">Help</a>
                    </ul>
                    {/* <p>© 2025 My Website. All rights reserved.</p> */}
              </div>
            </footer>
        </div>
    );
};
export default Footer;

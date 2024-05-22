import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <p className="footer-title">Post-shower Experience Redefined</p>
        <p className="footer-text">
          Experience luxurious, safer towels with us.
        </p>
        <div className="social-icons">
          <FaTwitter className="social-icon" />
          <FaFacebookSquare className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaPinterest className="social-icon" />
        </div>
      </div>

      <div className="footer-section">
        <p className="footer-title">QUICK LINKS</p>
        <p className="footer-link">About Us</p>
        <p className="footer-link">Contact Us</p>
        <p className="footer-link">Terms & Conditions</p>
        <p className="footer-link">Returns & Exchanges</p>
        <p className="footer-link">Privacy Policy</p>
      </div>

      <div className="footer-section">
        <div className="newsletter">
          <input
            className="newsletter-input"
            type="text"
            placeholder="Enter email"
          />
          <button className="newsletter-button">SIGN UP</button>
        </div>
        <div className="social-icons">
          <FaTwitter className="social-icon" />
          <FaFacebookSquare className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaPinterest className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

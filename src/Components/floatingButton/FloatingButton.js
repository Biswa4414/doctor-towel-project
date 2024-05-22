import React, { useState } from "react";
import { FaRobot, FaStethoscope } from "react-icons/fa";
import "./floatingButton.css";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-container">
      <button className="floating-button" onClick={toggleMenu}>
        <FaRobot className="floating-icon" />
      </button>
      {isOpen && (
        <div className="floating-menu">
          <a
            href="https://www.chatbase.co/chatbot-iframe/5Fx5SjtHAoTllhuhiSLFV"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item"
          >
            <FaRobot className="menu-icon" /> Chat with AI
          </a>
          <a
            href="https://wa.me/918917348647?text=Hello%20Doctor"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item"
          >
            <FaStethoscope className="menu-icon" /> Consult a Doctor
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;

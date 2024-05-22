import React from "react";
import { Link } from "react-router-dom";
import "./page.css";

const Consultation = () => {
  return (
    <div className="consultation-container">
      <h1>Consultation Options</h1>
      <div className="buttons-container">
        <Link to="/ai-chat" className="button">
          Chat with AI
        </Link>
        <Link to="/consult-doctor" className="button">
          Consult a Doctor
        </Link>
      </div>
    </div>
  );
};

export default Consultation;

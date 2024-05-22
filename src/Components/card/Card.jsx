// src/Components/Card/Card.js
import React from "react";
import "./card.css";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.jpg";
import award1 from "../../assets/award1.jpg";
import award2 from "../../assets/award2.jpg";
import award3 from "../../assets/award3.jpg";
import icon from "../../assets/icon.jpg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="heading">
        <h1>Shop By Product</h1>
        <div className="para">
          Redefining the skincare game for over 10 lakh + Customers & Counting
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={pro1} alt="Product 1" className="card-img" />
          <div className="card-content">
            <h2>HAIR</h2>
            <p>High-quality skincare product.</p>
          </div>
        </div>
        <div className="card">
          <img src={pro2} alt="Product 2" className="card-img" />
          <div className="card-content">
            <h2>BATH</h2>
            <p>Natural and effective ingredients.</p>
          </div>
        </div>
        <div className="card">
          <img src={pro3} alt="Product 3" className="card-img" />
          <div className="card-content">
            <h2>FACE</h2>
            <p>Trusted by millions of customers.</p>
          </div>
        </div>
        <div className="card">
          <img src={pro4} alt="Product 4" className="card-img" />
          <div className="card-content">
            <h2>GYM</h2>
            <p>Trusted by millions of customers.</p>
          </div>
        </div>
      </div>
      <div className="last-year-section">
        <h2>Last Year's Prizes</h2>
        <div className="cards last-year-cards">
          <div className="card">
            <img src={award1} alt="Prize 1" className="card-img" />
            <div className="card-content">
              <h4>Prize 1</h4>
              <p>Most Preffered Brands</p>
            </div>
          </div>
          <div className="card">
            <img src={award2} alt="Prize 2" className="card-img" />
            <div className="card-content">
              <h4>Prize 2</h4>
              <p>Emerging Start Up Of The Year</p>
            </div>
          </div>
          <div className="card">
            <img src={award3} alt="Prize 3" className="card-img" />
            <div className="card-content">
              <h4>Prize 3</h4>
              <p>Product Innovation</p>
            </div>
          </div>
        </div>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Card;

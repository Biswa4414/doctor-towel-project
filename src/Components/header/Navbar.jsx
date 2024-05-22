import React from "react";
import "./header.css";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <span className="search">
            <IoMdSearch className="icon" /> Search
          </span>
        </div>
        <div className="middle">
          <img
            className="logo"
            src="https://doctortowels.com/cdn/shop/files/doctor_towel_it_s_safe_logo_340x.jpg?v=1695272776"
            alt="logo"
          />
        </div>
        <div className="right">
          <div className="cart">
            Cart <FaCartShopping className="icon" />{" "}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#">Towels</a>
          <a href="#">Shop By Material</a>
          <a href="#">Thirsty Towel</a>
          <a href="#">Combo</a>
          <a href="#">Gifting</a>
          <a href="#" className="summer">
            Summer Store
          </a>
          <a href="#">Blogs</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

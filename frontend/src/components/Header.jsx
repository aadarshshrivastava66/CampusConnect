import React from "react";
import "../css/header.css";

import {
  FaGraduationCap,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaHouse,
  FaUserShield,
  FaCaretDown,
} from "react-icons/fa6";

const Header = () => {
  return (
    <>
     

      <header className="top-header">

        {/* Logo */}
        <div className="logo">

          <FaGraduationCap className="logo-icon" />

          <div className="logo-text">
            <h1>MYCOLLEGE</h1>
            <p>Enlightening Wisdom</p>
          </div>

        </div>

        {/* Contact Info */}
        <div className="header-info">

          {/* Location */}
          <div className="info-box">

            <FaLocationDot className="info-icon" />

            <div>
              <h3>Location</h3>
              <p>Rau Bypass Road</p>
            </div>

          </div>

          {/* Phone */}
          <div className="info-box">

            <FaPhone className="info-icon" />

            <div>
              <h3>Call Us</h3>
              <p>0731-4730000</p>
            </div>

          </div>

          {/* Email */}
          <div className="info-box">

            <FaEnvelope className="info-icon" />

            <div>
              <h3>Email</h3>
              <p>admission@mycollege.in</p>
            </div>

          </div>

        </div>

      </header>



      <nav className="navbar">

        <ul className="nav-links">

          {/* Home */}
          <li>
            <a href="/mycollege">
              <FaHouse />
              Home
            </a>
          </li>

          {/* About */}
          <li className="dropdown-parent">

            <a href="/mycollege/about">
              About 
            </a>

           

          </li>

          {/* Programs */}
          <li className="dropdown-parent">

            <a href="/mycollege/programs">
              Programs <FaCaretDown />
            </a>

            <div className="dropdown">

              <a href="/mycollege/programs/ug">
                UG Programs
              </a>

              <a href="/mycollege/programs/pg">
                PG Programs
              </a>


            </div>

          </li>

          {/* Notice */}
          <li>
            <a href="/mycollege/notice">
              Notice
            </a>
          </li>

          {/* Contact */}
          <li>
            <a href="/mycollege/contact">
              Contact
            </a>
          </li>
          <li>
           <a href="/mycollege/enquiry">
     
            Admission Enquiry
          </a>
          </li>


        </ul>

        {/* Right Section */}
        <div className="right-section">

          {/* Admin Login */}
          <a href="/mycollege/admin-login" className="login">
            <FaUserShield />
            Admin Login
          </a>

          {/* Admission Enquiry */}
       

        </div>

      </nav>
    </>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

import {
  FaGraduationCap,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaHouse,
  FaUserShield,
  FaCaretDown,
  FaRightFromBracket,
} from "react-icons/fa6";

// IMPORT AUTH CONTEXT
import { useAuth } from "../context/AuthContext";

const Header = () => {

  // GET USER & LOGOUT FROM CONTEXT
  const { user, logout } = useAuth();

  // HANDLE LOGOUT
  const handleLogout = () => {

    logout();

    // redirect after logout
    window.location.href = "/mycollege/login";
  };

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

      {/* NAVBAR */}
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
            <a href="/mycollege/about">About</a>
          </li>

          {/* Programs */}
          <li className="dropdown-parent">

            <Link to="/mycollege/programs">
              Programs <FaCaretDown />
            </Link>

            <div className="dropdown">
              <Link to="/mycollege/programs/ug">
                UG Programs
              </Link>

              <Link to="/mycollege/programs/pg">
                PG Programs
              </Link>
            </div>
          </li>

          {/* Notice */}
          <li>
            <a href="/mycollege/notice">Notice</a>
          </li>

          {/* Contact */}
          <li>
            <a href="/mycollege/contact">Contact</a>
          </li>

          {/* Enquiry */}
          <li>
            <a href="/mycollege/enquiry">
              Admission Enquiry
            </a>
          </li>
        </ul>

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* IF USER LOGGED IN */}
          {user ? (

            <button
              onClick={handleLogout}
              className="login logout-btn"
            >
              <FaRightFromBracket />
              Logout
            </button>

          ) : (

            <a
              href="/mycollege/login"
              className="login"
            >
              <FaUserShield />
              Admin Login
            </a>

          )}

        </div>
      </nav>
    </>
  );
};

export default Header;
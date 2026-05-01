import React from "react";
import "../css/footer.css";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ================= TOP FOOTER ================= */}

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">

          <h2>MYCOLLEGE</h2>

          <p>
            MYCOLLEGE is committed to providing
            quality education, innovation,
            practical learning, and excellent
            placement opportunities for students.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">

            <a href="https://facebook.com">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com">
              <FaInstagram />
            </a>

            <a href="https://linkedin.com">
              <FaLinkedinIn />
            </a>

            <a href="https://youtube.com">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="/mycollege">
                Home
              </a>
            </li>

            <li>
              <a href="/mycollege/about">
                About Us
              </a>
            </li>

            <li>
              <a href="/mycollege/programs">
                Programs
              </a>
            </li>

            <li>
              <a href="/mycollege/notice">
                Notice
              </a>
            </li>

            <li>
              <a href="/mycollege/contact">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* PROGRAMS */}
        <div className="footer-section">

          <h3>Programs</h3>

          <ul>

            <li>
              <a href="/mycollege/programs/ug">
                UG Programs
              </a>
            </li>

            <li>
              <a href="/mycollege/programs/pg">
                PG Programs
              </a>
            </li>

            <li>
              <a href="/mycollege/programs/diploma">
                Diploma Programs
              </a>
            </li>

            <li>
              <a href="/mycollege/programs/mba">
                MBA
              </a>
            </li>

            <li>
              <a href="/mycollege/programs/btech">
                B.Tech
              </a>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div className="footer-section">

          <h3>Contact Info</h3>

          <div className="contact-info">

            <p>
              <FaLocationDot className="footer-icon" />
              Rau Bypass Road, Indore
            </p>

            <p>
              <FaPhone className="footer-icon" />
              +91 731 4730000
            </p>

            <p>
              <FaEnvelope className="footer-icon" />
              admission@mycollege.in
            </p>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM FOOTER ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 MYCOLLEGE. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
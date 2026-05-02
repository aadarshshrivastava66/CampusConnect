import React from "react";
import "../css/contact.css";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact-page">

    

      <div className="contact-hero">

        <div className="contact-overlay">

          <h1>Contact MYCOLLEGE</h1>

          <p>
            We are here to help you with admissions,
            programs, campus visits, and other queries.
          </p>

        </div>

      </div>

     

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-tag">
            Get In Touch
          </span>

          <h2>
            We Would Love To Hear From You
          </h2>

          <p>
            Contact us for admission enquiries,
            program details, placement support,
            and campus-related information.
          </p>

          {/* CONTACT INFO */}

          <div className="contact-info">

            <div className="info-box">

              <FaLocationDot className="info-icon" />

              <div>
                <h3>Location</h3>

                <p>
                  Rau Bypass Road, Indore,
                  Madhya Pradesh, India
                </p>
              </div>

            </div>

            <div className="info-box">

              <FaPhone className="info-icon" />

              <div>
                <h3>Phone Number</h3>

                <p>+91 731 4730000</p>
              </div>

            </div>

            <div className="info-box">

              <FaEnvelope className="info-icon" />

              <div>
                <h3>Email Address</h3>

                <p>admission@mycollege.in</p>
              </div>

            </div>

            <div className="info-box">

              <FaClock className="info-icon" />

              <div>
                <h3>Working Hours</h3>

                <p>Mon - Sat : 9:00 AM - 5:00 PM</p>
              </div>

            </div>

          </div>

          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="contact-right">

          <h2>Send Message</h2>

          <form className="contact-form">

            <div className="input-group">

              <input
                type="text"
                placeholder="Enter Your Name"
              />

              <input
                type="email"
                placeholder="Enter Your Email"
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* ================= MAP SECTION ================= */}

  

    </section>
  );
};

export default Contact;
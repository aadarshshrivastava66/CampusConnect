import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <section className="about-page">

      {/* ================= HERO SECTION ================= */}

      <div className="about-hero">

        <div className="about-overlay">

          <h1>About MYCOLLEGE</h1>

          <p>
            Building future leaders through quality education,
            innovation, research, and industry-focused learning.
          </p>

        </div>

      </div>

      {/* ================= ABOUT CONTENT ================= */}

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <img
            src="/campusphoto.jpg"
            alt="college"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <span className="section-tag">
            About Institution
          </span>

          <h2>
            Empowering Students Through
            Modern Education
          </h2>

          <p>
            MYCOLLEGE is one of the leading educational
            institutions dedicated to academic excellence,
            skill development, innovation, and research.
            Our goal is to provide students with practical
            learning and industry exposure that helps them
            succeed in their professional careers.
          </p>

          <p>
            We focus on creating an environment that promotes
            creativity, leadership, teamwork, and technical
            knowledge through advanced laboratories,
            experienced faculty, and modern infrastructure.
          </p>

          {/* FEATURES */}
          <div className="features-grid">

            <div className="feature-box">
              <h3>Experienced Faculty</h3>

              <p>
                Learn from highly qualified and
                experienced professors.
              </p>
            </div>

            <div className="feature-box">
              <h3>Modern Infrastructure</h3>

              <p>
                Smart classrooms, advanced labs,
                and digital learning systems.
              </p>
            </div>

            <div className="feature-box">
              <h3>Placement Support</h3>

              <p>
                Training programs and campus
                placements with top companies.
              </p>
            </div>

            <div className="feature-box">
              <h3>Research & Innovation</h3>

              <p>
                Encouraging innovation and
                real-world project development.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ================= VISION & MISSION ================= */}

      <section className="vision-section">

        <div className="vision-card">

          <h2>Our Vision</h2>

          <p>
            To become a globally recognized institution
            that inspires excellence in education,
            innovation, leadership, and research while
            preparing students for future challenges.
          </p>

        </div>

        <div className="mission-card">

          <h2>Our Mission</h2>

          <p>
            To provide quality education, practical learning,
            ethical values, and industry-oriented training
            that helps students become skilled professionals
            and responsible citizens.
          </p>

        </div>

      </section>

      {/* ================= STATS SECTION ================= */}

      <section className="about-stats">

        <div className="stats-box">
          <h2>5000+</h2>
          <p>Students</p>
        </div>

        <div className="stats-box">
          <h2>100+</h2>
          <p>Faculty Members</p>
        </div>

        <div className="stats-box">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>

        <div className="stats-box">
          <h2>50+</h2>
          <p>Programs</p>
        </div>

      </section>

      {/* ================= RECRUITERS ================= */}

      <section className="recruiters-section">

        <div className="section-title">

          <h2>Top Recruiters</h2>

          <p>
            Leading companies recruiting students
            from MYCOLLEGE every year.
          </p>

        </div>

        <div className="recruiters-grid">

          <div className="recruiter-card">TCS</div>

          <div className="recruiter-card">Infosys</div>

          <div className="recruiter-card">Wipro</div>

          <div className="recruiter-card">Accenture</div>

          <div className="recruiter-card">Capgemini</div>

          <div className="recruiter-card">Cognizant</div>

          <div className="recruiter-card">HCL</div>

          <div className="recruiter-card">Tech Mahindra</div>

        </div>

      </section>

    </section>
  );
};

export default About;
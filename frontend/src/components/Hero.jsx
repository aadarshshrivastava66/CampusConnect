import React from "react";
import "../css/hero.css";

const Hero = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-overlay">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <p className="hero-subtitle">
              Welcome To MYCOLLEGE
            </p>

            <h1>
              Shaping Future Leaders Through
              Innovation & Quality Education
            </h1>

            <p className="hero-description">
              MYCOLLEGE is committed to delivering
              world-class education with modern learning,
              industry-focused programs, experienced faculty,
              and excellent placement opportunities that help
              students achieve academic and professional success.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">

              <a
                href="/mycollege/about"
                className="hero-btn primary-btn"
              >
                Explore Campus
              </a>

              <a
                href="/mycollege/programs"
                className="hero-btn secondary-btn"
              >
                View Programs
              </a>

            </div>

            {/* SMALL INFO BOXES */}
            <div className="hero-highlights">

              <div className="highlight-box">
                <h3>15+</h3>
                <p>Years Excellence</p>
              </div>

              <div className="highlight-box">
                <h3>50+</h3>
                <p>Industry Courses</p>
              </div>

              <div className="highlight-box">
                <h3>200+</h3>
                <p>Recruiters</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="hero-card">

            <h2>Why Choose Us ?</h2>

            <ul>

              <li>✔ Modern Smart Classrooms</li>

              <li>✔ Experienced Faculty Members</li>

              <li>✔ Industry Based Learning</li>

              <li>✔ Excellent Placement Support</li>

              <li>✔ Advanced Computer Labs</li>

              <li>✔ Sports & Cultural Activities</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= VISION & MISSION ================= */}

      <section className="vision-mission-section">

        <div className="section-title">
          <h2>Vision & Mission</h2>

          <p>
            Empowering students with education,
            innovation, leadership, and values
            for a successful future.
          </p>
        </div>

        <div className="vision-mission-container">

          {/* VISION */}
          <div className="vision-card">

            <h2>Our Vision</h2>

            <p>
              To become a globally recognized institution
              that inspires innovation, research, leadership,
              and excellence in education while preparing
              students to meet future challenges.
            </p>

          </div>

          {/* MISSION */}
          <div className="mission-card">

            <h2>Our Mission</h2>

            <p>
              To provide high-quality education,
              practical learning, industry exposure,
              and ethical values that help students
              become skilled professionals and responsible citizens.
            </p>

          </div>

        </div>

      </section>

      {/* ================= RECRUITMENT SECTION ================= */}

      <section className="companies-section">

        <div className="section-title">

          <h2>Top Recruitment Partners</h2>

          <p>
            Leading companies that recruit students
            from MYCOLLEGE every year.
          </p>

        </div>

        <div className="companies">

          <div className="company-card">TCS</div>

          <div className="company-card">Infosys</div>

          <div className="company-card">Wipro</div>

          <div className="company-card">Accenture</div>

          <div className="company-card">Capgemini</div>

          <div className="company-card">Cognizant</div>

          <div className="company-card">Tech Mahindra</div>

          <div className="company-card">HCL</div>

        </div>

      </section>

      {/* ================= STATISTICS SECTION ================= */}

      <section className="stats-section">

        <div className="stats-container">

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

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section">

        <div className="about-content">

          <div className="about-left">

            <h2>About MYCOLLEGE</h2>

            <p>
              MYCOLLEGE is one of the leading educational
              institutions dedicated to academic excellence,
              innovation, and skill development. We focus on
              providing students with practical knowledge,
              modern technologies, and career-oriented training.
            </p>

            <p>
              Our campus provides advanced laboratories,
              libraries, smart classrooms, sports facilities,
              and placement support to ensure overall growth
              and development of students.
            </p>

            <a href="/mycollege/about" className="about-btn">
              Read More
            </a>

          </div>

          <div className="about-right">

            <img
              src="/campusphoto.jpg"
              alt="college"
            />

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;
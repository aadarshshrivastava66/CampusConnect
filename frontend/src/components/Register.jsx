import { useState } from "react";
import axios from "axios";
import "../css/register.css";

export default function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/admin/register",
        formData
      );

      setMessage(res.data.message || "Registration Successful");

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Student",
        phone: ""
      });

    } catch (error) {

      setMessage(
        error.response?.data?.message || "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Register your account
        </p>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role */}
          <div className="input-group">
            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="SuperAdmin">SuperAdmin</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        <div className="login-link">
          Already have an account? <a href="/mycollege/login">Login</a>
        </div>

      </div>

    </div>
  );
}
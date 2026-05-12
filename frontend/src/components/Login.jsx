import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../css/login.css";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(

        "http://localhost:8080/admin/login",

        formData,

        {
          withCredentials: true
        }
      );

      setMessage(res.data.message);

      // Store user in Context ONLY
      login({

        userId: res.data.userId,
        role: res.data.role

      });

      // Redirect
      setTimeout(() => {

        navigate("/dashboard");

      }, 1000);

    } catch (error) {

      setMessage(

        error.response?.data?.message ||
        "Login Failed"

      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to continue
        </p>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <button type="submit">

            {loading ? "Loading..." : "Login"}

          </button>

        </form>

      </div>

    </div>
  );
}
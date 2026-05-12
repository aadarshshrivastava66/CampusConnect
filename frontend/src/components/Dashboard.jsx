import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  // Logout
  const handleLogout = async () => {

    try {

      await axios.get(

        "http://localhost:5000/api/logout",

        {
          withCredentials: true
        }
      );

      logout();

      navigate("/mycollege/login");

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >

      <h1>
        Welcome To Dashboard
      </h1>

      <h2>
        Role : {user?.role}
      </h2>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  );
}
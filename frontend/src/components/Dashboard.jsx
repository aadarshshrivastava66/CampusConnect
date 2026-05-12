import "../css/dashboard.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import axios from "axios";

import { useAuth } from "../context/AuthContext";

import {
  FaFileCirclePlus,
  FaClipboardList,
  FaRightFromBracket
} from "react-icons/fa6";

export default function Dashboard() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

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

    <div className="dashboard-container">

      <div className="dashboard-top">

        

          <h1 className="dashboard-title">
            Admin Dashboard
          </h1>

        


      </div>

      <div className="dashboard-cards">

        <Link
          to="/mycollege/uploadNotice"
          className="dashboard-card"
        >

          <FaFileCirclePlus className="dashboard-icon" />

          <h2>
            Add New File
          </h2>

          <p>
            Upload new notice, PDF, document or file.
          </p>

        </Link>

        <Link
          to="/mycollege/viewenquiry"
          className="dashboard-card"
        >

          <FaClipboardList className="dashboard-icon" />

          <h2>
            View Admission Enquiry
          </h2>

          <p>
            Check all admission enquiry submissions.
          </p>

        </Link>

      </div>

    </div>
  );
}
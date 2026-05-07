import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/programs.css";

function Programs() {

  const { type } = useParams(); // ug / pg

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    if (!type) return;

    const fetchPrograms = async () => {

      try {

        setLoading(true);
        setError("");

        const res = await fetch(
          `http://localhost:8080/courses/${type}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        console.log("RAW DATA:", data);

        // ✅ Transform data properly
        const formattedData = data.map((item) => ({
          _id: item._id,
          name: item.courseName || "Course Name",
          description:
            item.eligibility?.details ||
            item.eligibility?.criteria ||
            "No description available",
          duration: item.duration || "N/A",

          // ✅ Keep full fees object
          fees: item.fees || {}
        }));

        setPrograms(formattedData);

      } catch (err) {

        console.log(err);
        setError("Something went wrong");

      } finally {

        setLoading(false);

      }

    };

    fetchPrograms();

  }, [type]);

  return (

    <section className="programs-page">

      {/* ================= HEADER ================= */}

      <div className="programs-header">

        <h1>
          {type?.toUpperCase()} COURSES
        </h1>

        <p>
          Explore our wide range of academic programs
          designed for your future success.
        </p>

      </div>

      {/* ================= PROGRAM LIST ================= */}

      <div className="programs-container">

        {loading && <h2 className="loading">Loading Programs...</h2>}

        {error && <h2 className="loading">{error}</h2>}

        {!loading && !error && programs.length === 0 && (
          <h2 className="loading">No Programs Found</h2>
        )}

        {!loading && !error && programs.length > 0 && (

          programs.map((program) => (

            <div
              key={program._id}
              className="program-card"
            >

              <h2>{program.name}</h2>

             

              <div className="program-info">

                <span>
                  Duration: {program.duration}
                </span>

                <span>
                  Total Fees: ₹{program.fees?.totalFees || "N/A"}
                </span>

                <span>
                  Per Year: ₹{program.fees?.perYear || "N/A"}
                </span>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default Programs;
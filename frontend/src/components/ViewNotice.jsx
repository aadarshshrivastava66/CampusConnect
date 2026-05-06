import React from "react";
import { useParams } from "react-router-dom";
import "../css/viewnotice.css";

function ViewNotice() {



  const { id } = useParams();


  const pdfUrl =
    `http://localhost:8080/notice/detail/${id}`;

  return (

    <section className="view-notice-page">

      {/* ================= TOP BAR ================= */}

      <div className="pdf-topbar">

        <h2>
          Notice PDF Viewer
        </h2>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="download-btn"
        >
          Download PDF
        </a>

      </div>

      {/* ================= PDF VIEWER ================= */}

      <iframe
        src={pdfUrl}
        title="Notice PDF"
        className="pdf-viewer"
      ></iframe>

    </section>

  );
}

export default ViewNotice;
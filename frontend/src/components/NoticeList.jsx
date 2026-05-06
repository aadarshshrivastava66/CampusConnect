import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/noticelist.css";

function NoticeList() {

  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);

  const [selectedType, setSelectedType] =
    useState("generalnotice");


  const noticeTypes = [

    {
      label: "General Notices",
      value: "generalnotice",
    },

    {
      label: "Fee Notices",
      value: "feenotice",
    },

    {
      label: "Scholarship Notices",
      value: "scholarshipnotice",
    },

    {
      label: "Sports Notices",
      value: "sportsnotice",
    },

  ];

  // ================= FETCH NOTICES =================

  const fetchNotices = async (type) => {

    try {

      const response = await fetch(
        `http://localhost:8080/notice/${type}`
      );

      const data = await response.json();
      console.log(data)

      console.log(data);

      setNotices(data);

    } catch (error) {

      console.log(error);

    }

  };

  // ================= DEFAULT NOTICE =================

  useEffect(() => {

    fetchNotices("generalnotice");

  }, []);

  // ================= HANDLE TAB =================

  const handleTabClick = (type) => {

    setSelectedType(type);

    fetchNotices(type);

  };

  // ================= VIEW NOTICE =================

  const handleViewNotice = (fileId) => {

    if (!fileId) {

      alert("File Not Found");

      return;

    }

    navigate(`/view-notice/${fileId}`);

  };

  return (

    <section className="notice-page">

      {/* ================= NOTICE TABS ================= */}

      <div className="notice-tabs">

        {noticeTypes.map((item) => (

          <button
            key={item.value}
            className={
              selectedType === item.value
                ? "active-tab"
                : ""
            }
            onClick={() =>
              handleTabClick(item.value)
            }
          >

            {item.label}

            {selectedType === item.value && (
              <span className="triangle"></span>
            )}

          </button>

        ))}

      </div>

      {/* ================= NOTICE LIST ================= */}

      <div className="notice-list">

        {notices.length > 0 ? (

          notices.map((notice) => (

            <div
              key={notice._id}
              className="notice-item"

              onClick={() =>
                handleViewNotice(
                  
                  notice.file.fileId
                )
              }
            >

              <span className="bullet">
                •
              </span>

              <p>
                {notice.title}
              </p>

            </div>

          ))

        ) : (

          <h2 className="no-notice">
            No Notices Available
          </h2>

        )}

      </div>

    </section>

  );
}

export default NoticeList;
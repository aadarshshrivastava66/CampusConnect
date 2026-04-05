import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NoticeList() {
  const [notices, setNotices] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:8080/notice/view")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1>All Notices</h1>
      

      {notices.map((notice) => (
        <div
          key={notice._id}
          style={styles.card}
          
        >
          <h3>{notice.title}</h3>
          <p>{notice.description}</p>
          <span style={styles.type}>{notice.noticeType}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "600px",
    margin: "auto"
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "8px"
  },
  type: {
    background: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px"
  }
};

export default NoticeList;
import React, { useState } from "react";

function File() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    noticeType: "General",
    isActive: true,
    file: null
  });

  // Handle text input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle file
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("noticeType", formData.noticeType);
    data.append("isActive", formData.isActive);
    data.append("file", formData.file);

    try {
      const res = await fetch("http://localhost:8080/notice/uploadenotice", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      console.log(result);

      alert("Notice uploaded successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Upload Notice</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            style={styles.input}
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="description"
            placeholder="Enter Description"
            onChange={handleChange}
            required
          />

          <select
            style={styles.input}
            name="noticeType"
            onChange={handleChange}
          >
            <option value="General">General</option>
            <option value="Fee">Fee</option>
            <option value="Scholarship">Scholarship</option>
            <option value="Sports">Sports</option>
          </select>

          <input
            style={styles.input}
            type="file"
            onChange={handleFileChange}
            required
          />

          {formData.file && (
            <p style={styles.fileName}>{formData.file.name}</p>
          )}

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            <label>Active Notice</label>
          </div>

          <button style={styles.button} type="submit">
            Upload
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9"
  },

  card: {
    width: "400px",
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    height: "100px",
    resize: "none"
  },

  checkboxContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  },

  fileName: {
    fontSize: "14px",
    color: "#555"
  },

  button: {
    padding: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default File;
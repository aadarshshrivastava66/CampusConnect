import React, { useState } from "react";
import "../css/file.css";

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

    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setFormData({

      ...formData,

      [name]:
        type === "checkbox"
          ? checked
          : value
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

    data.append(
      "description",
      formData.description
    );

    data.append(
      "noticeType",
      formData.noticeType
    );

    data.append(
      "isActive",
      formData.isActive
    );

    data.append(
      "file",
      formData.file
    );

    try {

      const res = await fetch(

        "http://localhost:8080/notice/uploadenotice",

        {
          method: "POST",
          body: data
        }
      );

      const result = await res.json();

      console.log(result);

      alert("Notice uploaded successfully!");

    } catch (err) {

      console.error(err);
    }
  };

  return (

    <div className="upload-container">

      <div className="upload-card">

        <h2>
          Upload Notice
        </h2>

        <form
          onSubmit={handleSubmit}
          className="upload-form"
        >

          {/* Title */}

          <input
            className="upload-input"
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
            required
          />

          {/* Description */}

          <textarea
            className="upload-textarea"
            name="description"
            placeholder="Enter Description"
            onChange={handleChange}
            required
          />

          {/* Notice Type */}

          <select
            className="upload-input"
            name="noticeType"
            onChange={handleChange}
          >

            <option value="General">
              General
            </option>

            <option value="Fee">
              Fee
            </option>

            <option value="Scholarship">
              Scholarship
            </option>

            <option value="Sports">
              Sports
            </option>

          </select>

          {/* File */}

          <input
            className="upload-input"
            type="file"
            onChange={handleFileChange}
            required
          />

          {/* File Name */}

          {formData.file && (

            <p className="file-name">

              {formData.file.name}

            </p>

          )}

          {/* Active */}

          <div className="checkbox-container">

            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />

            <label>
              Active Notice
            </label>

          </div>

          {/* Button */}

          <button
            className="upload-btn"
            type="submit"
          >

            Upload Notice

          </button>

        </form>

      </div>

    </div>
  );
}

export default File;
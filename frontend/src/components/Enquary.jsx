
import { useState } from "react";
import axios from "axios";
import '../css/enquiry.css'

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    enquiry: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories = [
    "Fees Related",
    "Admission Related",
    "Courses Related",
    "Scholarship Related",
    "Sports Related",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/enquiry",
        formData
      );

      setMessage(res.data.message);

      setFormData({
        name: "",
        phone: "",
        category: "",
        enquiry: "",
      });
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Student Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">
              Enquiry Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Category</option>

              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Enquiry */}
          <div>
            <label className="block mb-2 font-medium">
              Your Enquiry
            </label>

            <textarea
              name="enquiry"
              rows="5"
              placeholder="Write your enquiry..."
              value={formData.enquiry}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          {message && (
            <p className="text-center text-green-600 font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
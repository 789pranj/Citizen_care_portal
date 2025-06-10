import React, { useState } from "react";
import axios from "axios";
import {
  User,
  Phone,
  MapPin,
  FileText,
  Image as ImageIcon,
  Send,
} from "lucide-react";

const Complain = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    complaint: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("location", formData.location);
    data.append("complaint", formData.complaint);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      // Replace with your backend API
      console.log("FormData ready to send:", [...data.entries()]);
      alert("✅ Complaint ready to be submitted (API not connected)");

      setFormData({
        name: "",
        phone: "",
        location: "",
        complaint: "",
        file: null,
      });
    } catch (error) {
      console.error("❌ Error submitting complaint:", error);
      alert("🚫 Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-700">
          Citizen Complaint Portal
        </h2>

        {/* Name */}
        <div className="flex items-center border-2 border-green-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <User className="text-green-500 mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex items-center border-2 border-green-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <Phone className="text-green-500 mr-3" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Location */}
        <div className="flex items-center border-2 border-green-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <MapPin className="text-green-500 mr-3" />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Complaint */}
        <div className="flex items-start border-2 border-green-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <FileText className="text-green-500 mr-3 mt-1" />
          <textarea
            name="complaint"
            placeholder="Describe your complaint clearly..."
            value={formData.complaint}
            onChange={handleChange}
            rows={4}
            className="w-full outline-none bg-transparent resize-none text-gray-700"
            required
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="flex items-center border-2 border-green-300 rounded-xl px-4 py-3">
          <ImageIcon className="text-green-500 mr-3" />
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm cursor-pointer text-gray-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 w-full text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition duration-200 cursor-pointer"
        >
          <Send size={18} />
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Complain;

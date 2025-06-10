import React, { useState } from "react";
import axios from "axios";
import {
  User,
  Phone,
  MapPin,
  FileText,
  Image as ImageIcon,
  Send,
  CheckCircle,
} from "lucide-react";

const Complain = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    complaint: "",
    file: null,
  });

  const [success, setSuccess] = useState(false);

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

    try {
      const classifyRes = await axios.post("http://localhost:8000/classify", {
        complaint: formData.complaint,
      });

      const cleaned = classifyRes.data.result.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      const { category, priority } = parsed;

      const complaintPayload = {
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        complaint: formData.complaint,
        category,
        priority,
        summary: formData.complaint,
        status: "Pending",
      };

      await axios.post(
        "http://localhost:5000/api/complain/submit-complaint",
        complaintPayload
      );

      // ✅ Success UI logic
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        location: "",
        complaint: "",
        file: null,
      });

      // Hide success after 4s
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4 relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-700">
          Citizen Complaint Portal
        </h2>

        {/* Inputs (Name, Phone, Location) */}
        {["name", "phone", "location"].map((field, i) => (
          <div
            key={i}
            className="flex items-center border-2 border-green-300 rounded-xl px-4 py-3 transition focus-within:shadow-md"
          >
            {field === "name" ? <User className="text-green-500 mr-3" /> :
             field === "phone" ? <Phone className="text-green-500 mr-3" /> :
             <MapPin className="text-green-500 mr-3" />}
            <input
              type={field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
        ))}

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

        {/* Optional File Upload */}
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

      {/* ✅ Success Message */}
      {success && (
        <div className="absolute top-6 right-6 bg-green-100 text-green-800 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-green-600" />
          Complaint submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Complain;

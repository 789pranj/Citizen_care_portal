import React, { useState } from "react";
import { BellPlus, Hash, Mail, FileText, CalendarDays, Send } from "lucide-react";

const SetRemainder = () => {
  const [form, setForm] = useState({
    complaintId: "",
    email: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Reminder Set Successfully!");
    setForm({ complaintId: "", email: "", message: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl space-y-6"
      >
        <div className="flex items-center gap-2 text-yellow-600 justify-center mb-4">
          <BellPlus className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Set a Reminder</h2>
        </div>

        {/* Complaint ID */}
        <div className="flex items-center border-2 border-yellow-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <Hash className="text-yellow-500 mr-3" />
          <input
            type="text"
            name="complaintId"
            placeholder="Complaint ID"
            value={form.complaintId}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center border-2 border-yellow-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <Mail className="text-yellow-500 mr-3" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Reminder Message */}
        <div className="flex items-start border-2 border-yellow-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <FileText className="text-yellow-500 mr-3 mt-1" />
          <textarea
            name="message"
            placeholder="Reminder message..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full outline-none bg-transparent resize-none text-gray-700"
            required
          ></textarea>
        </div>

        {/* Reminder Date */}
        <div className="flex items-center border-2 border-yellow-300 rounded-xl px-4 py-3 transition focus-within:shadow-md">
          <CalendarDays className="text-yellow-500 mr-3" />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 w-full text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-600 transition duration-200 cursor-pointer"
        >
          <Send size={18} />
          Set Reminder
        </button>
      </form>
    </div>
  );
};

export default SetRemainder;

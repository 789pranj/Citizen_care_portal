import React, { useState } from "react";
import { MessageCircleHeart, Star } from "lucide-react";
import axios from "axios";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    feedback: "",
    rating: 5, // default rating
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // ✅ ADD YOUR FEEDBACK API ENDPOINT HERE
      // Example: await axios.post("/api/feedback", form);

      console.log("Feedback submitted:", form);

      // Simulate success
      setTimeout(() => {
        setStatus("✅ Thank you for your feedback!");
        setForm({ name: "", number: "", feedback: "", rating: 5 });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Feedback error:", error);
      setStatus("❌ Failed to send feedback.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-2 mb-6 text-purple-600">
          <MessageCircleHeart className="w-6 h-6" />
          <h2 className="text-2xl font-bold">We’d Love Your Feedback</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            name="number"
            type="number"
            placeholder="Your Number"
            value={form.number}
            onChange={handleChange}
          />
          <TextareaField
            label="Feedback"
            name="feedback"
            placeholder="Write your feedback..."
            value={form.feedback}
            onChange={handleChange}
          />

          {/* ⭐ Rating Slider */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" /> Rate us (1 to 10)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                name="rating"
                min="1"
                max="10"
                value={form.rating}
                onChange={handleChange}
                className="w-full"
              />
              <span className="text-purple-600 font-bold">{form.rating}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 rounded-md transition ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>

          {status && (
            <p className="text-center mt-2 text-sm font-medium text-green-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
      required
    />
  </div>
);

const TextareaField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      rows="4"
      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
      required
    ></textarea>
  </div>
);

export default Feedback;

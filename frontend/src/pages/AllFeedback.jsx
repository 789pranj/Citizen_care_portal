import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageSquareText, Star, Search } from "lucide-react";

const AllFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/feedback/get-feedback");
        setFeedbacks(res.data);
      } catch (err) {
        console.error("Failed to fetch feedbacks", err);
      }
    };

    fetchFeedbacks();
  }, []);

  const filtered = feedbacks.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const renderStars = (count) => {
    return (
      <div className="flex text-yellow-500">
        {Array.from({ length: count }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <MessageSquareText /> Citizen Feedbacks
        </h2>

        {/* Search Bar */}
        <div className="flex items-center gap-2 border rounded-xl px-4 py-2 mb-6">
          <Search className="text-green-500" />
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Feedback Cards */}
        <div className="grid gap-4">
          {filtered.length > 0 ? (
            filtered.map((f) => (
              <div
                key={f._id}
                className="border border-green-300 rounded-xl p-4 bg-green-50 shadow-sm"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-green-700">{f.name}</h3>
                  {renderStars(f.rating)}
                </div>
                <p className="text-gray-700 italic">{f.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No feedbacks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFeedback;

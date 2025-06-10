import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ShieldCheck,
  Search,
  Filter,
  ArrowUpDown,
  Flame,
  Loader2,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

const AllComplain = () => {
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get("status") || "";

  const [complaints, setComplaints] = useState([]);
  const [category, setCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const [sortPriority, setSortPriority] = useState(false);
  const [statusFilter, setStatusFilter] = useState(initialStatus);

  const categories = [
    "Electricity",
    "Water",
    "Sanitation",
    "Law & Order",
    "Health",
    "Education",
    "Roads",
    "Corruption",
    "Other",
  ];

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/complain/all-complaints");
        setComplaints(res.data);
      } catch (error) {
        console.error("Failed to fetch complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/complain/update-status/${id}`, {
        status: newStatus,
      });

      setComplaints((prev) =>
        prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
      );
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  const filtered = complaints
    .filter((c) => (category ? c.category === category : true))
    .filter((c) => (statusFilter ? c.status === statusFilter : true))
    .filter((c) => c.name.toLowerCase().includes(searchName.toLowerCase().trim()))
    .sort((a, b) => {
      if (!sortPriority) return 0;
      const priorityMap = { High: 3, Medium: 2, Low: 1 };
      return priorityMap[b.priority] - priorityMap[a.priority];
    });

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock className="w-4 h-4 mr-1 text-orange-500" />;
      case "In Progress":
        return <Loader2 className="w-4 h-4 mr-1 text-blue-500 animate-spin" />;
      case "Resolved":
        return <CheckCircle className="w-4 h-4 mr-1 text-green-600" />;
      default:
        return null;
    }
  };

  const getPriorityTag = (priority) => {
    let color = "", icon = null;
    switch (priority) {
      case "High":
        color = "bg-red-100 text-red-600";
        icon = <Flame className="w-4 h-4 mr-1" />;
        break;
      case "Medium":
        color = "bg-yellow-100 text-yellow-700";
        icon = <Flame className="w-4 h-4 mr-1" />;
        break;
      case "Low":
        color = "bg-gray-100 text-gray-600";
        icon = <Flame className="w-4 h-4 mr-1" />;
        break;
      default:
        return null;
    }
    return (
      <span className={`flex items-center text-xs px-2 py-1 rounded-full font-medium ${color}`}>
        {icon}
        {priority}
      </span>
    );
  };

  const getStatusTag = (status) => {
    let color = "", icon = getStatusIcon(status);
    switch (status) {
      case "Resolved":
        color = "bg-green-100 text-green-700";
        break;
      case "In Progress":
        color = "bg-blue-100 text-blue-700";
        break;
      default:
        color = "bg-orange-100 text-orange-600";
    }
    return (
      <span className={`flex items-center text-xs px-2 py-1 rounded-full font-medium ${color}`}>
        {icon}
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <div className="max-w-6xl mx-auto bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <ShieldCheck /> Admin Complaint Dashboard
        </h2>

        {/* 🔍 Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center border rounded-xl px-4 py-2">
            <Search className="text-green-500 mr-2" />
            <input
              type="text"
              placeholder="Search by Name"
              className="outline-none"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div className="flex items-center border rounded-xl px-4 py-2">
            <Filter className="text-green-500 mr-2" />
            <select
              className="bg-transparent outline-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setSortPriority(!sortPriority)}
            className="flex items-center gap-1 text-sm font-semibold text-white bg-green-600 px-5 py-3 cursor-pointer rounded-xl hover:bg-green-700 transition"
          >
            <ArrowUpDown size={16} />
            Sort by Priority
          </button>
        </div>

        {/* 📋 Complaint List */}
        <div className="grid gap-4">
          {filtered.map((c) => (
            <div
              key={c._id}
              className="border border-green-300 rounded-xl p-4 shadow-sm bg-green-50"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-green-700">
                  {c.name} ({c.phone})
                </h3>
                <div className="flex items-center gap-3">
                  {getPriorityTag(c.priority)}

                  <div className="flex items-center gap-2">
                    {getStatusTag(c.status)}
                    <select
                      value={c.status}
                      onChange={(e) => handleStatusUpdate(c._id, e.target.value)}
                      className="text-xs bg-white border border-green-300 rounded px-2 py-1 outline-none"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-1"><b>Category:</b> {c.category}</p>
              <p className="text-sm text-gray-700 mb-1"><b>Location:</b> {c.location}</p>
              <p className="text-sm text-gray-800 italic mb-1">“{c.complaint}”</p>
              <p className="text-sm text-green-900"><b>Summary:</b> {c.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllComplain;

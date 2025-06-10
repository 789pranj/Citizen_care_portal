import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";
import { useEffect, useState } from "react";
import {
  Clock,
  Loader2,
  CheckCircle,
  FileText,
  LogOut,
  UserCircle,
} from "lucide-react";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const clearUser = useAuthStore((s) => s.clearUser);
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Dummy - no need for counts right now
    setComplaints([
      { status: "Pending" },
      { status: "In Progress" },
      { status: "Resolved" },
    ]);
  }, []);

  const handleLogout = async () => {
    await logout();
    clearUser();
    navigate("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-2">
              Welcome, {user.fullName}
            </h2>
            <p className="text-green-600 text-sm">
              Here’s a quick overview of your complaint dashboard.
            </p>
          </div>
          
        </div>

        {/* 🔹 Grid of Complaint Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Pending"
            icon={<Clock className="text-yellow-600 w-8 h-8" />}
            bg="bg-yellow-100"
            onClick={() => navigate("/all-complains?status=Pending")}
          />
          <Card
            title="In Progress"
            icon={<Loader2 className="text-blue-600 w-8 h-8 animate-spin" />}
            bg="bg-blue-100"
            onClick={() => navigate("/all-complains?status=In Progress")}
          />
          <Card
            title="Resolved"
            icon={<CheckCircle className="text-green-600 w-8 h-8" />}
            bg="bg-green-100"
            onClick={() => navigate("/all-complains?status=Resolved")}
          />
          <Card
            title="All Complaints"
            icon={<FileText className="text-purple-700 w-8 h-8" />}
            bg="bg-purple-100"
            onClick={() => navigate("/all-complains")}
          />
        </div>

        {/* 🔹 Optional Footer Section */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Dashboard designed for faster resolution & transparency.
        </div>
      </div>
    </div>
  );
}

function Card({ title, icon, bg, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-xl shadow-md hover:shadow-lg flex items-center gap-4 transition ${bg}`}
    >
      <div>{icon}</div>
      <div className="text-xl font-semibold text-gray-800">{title}</div>
    </div>
  );
}

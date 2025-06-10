import React from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Bell, MessageCircle } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Welcome to Citizen Care Department
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Register complaints, set reminders for pending issues, and give your valuable feedback — all in one place.
        </p>
      </div>

      {/* 3 Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <SectionCard
          title="Register Complaint"
          description="Submit and track issues easily."
          icon={<Pencil className="w-8 h-8 text-blue-600" />}
          onClick={() => navigate("/submit-complain")}
          bg="bg-blue-100"
        />
        <SectionCard
          title="Set Reminder"
          description="Remind officials of pending actions."
          icon={<Bell className="w-8 h-8 text-yellow-600" />}
          onClick={() => navigate("/remainder")}
          bg="bg-yellow-100"
        />
        <SectionCard
          title="Give Feedback"
          description="Help improve civic services."
          icon={<MessageCircle className="w-8 h-8 text-green-600" />}
          onClick={() => navigate("/feedback")}
          bg="bg-green-100"
        />
      </div>
    </div>
  );
};

const SectionCard = ({ title, description, icon, onClick, bg }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-start gap-4 ${bg}`}
  >
    {icon}
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default LandingPage;

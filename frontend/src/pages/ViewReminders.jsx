import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, FileText, User, Phone } from "lucide-react";

const ViewReminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reminders/all")
      .then((res) => setReminders(res.data))
      .catch((err) => console.error("Error fetching reminders:", err));
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-yellow-600 flex items-center gap-2 mb-6">
          <CalendarDays /> All Set Reminders
        </h2>
        {reminders.length === 0 ? (
          <p className="text-gray-500">No reminders found.</p>
        ) : (
          <ul className="space-y-4">
            {reminders.map((reminder) => (
              <li
                key={reminder._id}
                className="border border-yellow-200 rounded-xl p-4 bg-yellow-50"
              >
                <p className="flex items-center gap-2">
                  <User className="text-yellow-600" size={16} />{" "}
                  <strong>Name:</strong> {reminder.name}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-yellow-600" size={16} />{" "}
                  <strong>Phone:</strong> {reminder.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="text-yellow-600" size={16} />{" "}
                  <strong>Message:</strong> {reminder.message}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="text-yellow-600" size={16} />{" "}
                  <strong>Date:</strong>{" "}
                  {new Date(reminder.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewReminders;

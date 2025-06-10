import Reminder from "../models/reminder.model.js";

export const setReminder = async (req, res) => {
  try {
    const { name, phone, message, date } = req.body;

    if (!name || !phone || !message || !date) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newReminder = new Reminder({ name, phone, message, date });
    await newReminder.save();

    res.status(201).json({ message: "Reminder set successfully!" });
  } catch (error) {
    console.error("Reminder error:", error);
    res.status(500).json({ error: "Server error while setting reminder." });
  }
};

export const getAllReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ date: 1 }); // sort by date
    res.status(200).json(reminders);
  } catch (error) {
    console.error("Error fetching reminders:", error);
    res.status(500).json({ error: "Failed to fetch reminders." });
  }
};


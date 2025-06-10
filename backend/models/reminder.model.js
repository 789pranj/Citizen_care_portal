import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Reminder", reminderSchema);

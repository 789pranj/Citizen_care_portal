import mongoose from "mongoose"; // ✅ Use import instead of require

const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  complaint: { type: String, required: true },
  category: { type: String, required: true },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    required: true,
  },
  summary: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending",
  },
  fileUrl: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint; // ✅ Use ES module export

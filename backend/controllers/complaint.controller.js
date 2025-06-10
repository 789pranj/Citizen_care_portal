import Complaint from "../models/Complaint.js";

export const SubmitComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit complaint" });
  }
};

export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find(); // newest first
    return res.status(200).json(complaints);
  } catch (err) {
    console.error("Error fetching complaints:", err);
    return res.status(500).json({ error: "Failed to fetch complaints" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Status update failed" });
  }
};

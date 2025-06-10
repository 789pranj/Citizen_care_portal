import express from 'express';
const router = express.Router();
import { getAllComplaints, SubmitComplaint, updateStatus } from '../controllers/complaint.controller.js';

router.post("/submit-complaint", SubmitComplaint); 
router.get("/all-complaints", getAllComplaints);
router.put("/update-status/:id", updateStatus);


export default router;

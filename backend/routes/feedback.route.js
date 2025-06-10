// routes/feedback.route.js
import express from "express";
import { submitFeedback, getAllFeedback } from "../controllers/feedback.controller.js";

const router = express.Router();

router.post("/submit-feedback", submitFeedback); // POST /api/feedback
router.get("/get-feedback", getAllFeedback);  // GET /api/feedback

export default router;

import express from "express";
import { getAllReminders, setReminder } from "../controllers/reminder.controller.js";

const router = express.Router();

router.post("/set", setReminder); // POST /api/reminders/set
router.get("/all", getAllReminders);

export default router;

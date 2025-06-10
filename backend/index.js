import express from "express";
import dotenv from "dotenv";
import authRoute from './routes/auth.route.js';
import { connectDB } from "./lib/db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import complainRoute from './routes/complain.route.js'
import feedbackRoute from './routes/feedback.route.js';
import reminderRoutes from "./routes/reminder.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/complain", complainRoute); 
app.use("/api/feedback", feedbackRoute);
app.use("/api/reminders", reminderRoutes);


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
  connectDB();
});

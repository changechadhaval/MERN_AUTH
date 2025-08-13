import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser"
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4040;
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,               // allow cookies
  })
);

// Routes
app.get("/", (req, res) => res.send("Hello, I am Home Page"));
app.use("/api/auth", authRouter);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

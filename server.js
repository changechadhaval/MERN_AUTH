import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import authRouter from "./server/routes/authRoutes.js";
import connectDB from "./server/config/connectDB.js";
import dotenv from "dotenv";
import path from "path";

// Load .env from server folder
dotenv.config({ path: path.resolve("server/.env") });

connectDB();

const app = express();
const port = process.env.PORT || 4040;


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

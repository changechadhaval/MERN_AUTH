import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";

// Load .env from server folder
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 4040;

// Middlewares
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
  // "https://mern-auth-frontend-xeee.onrender.com", // production frontend
  "http://localhost:5173" // local dev frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // important for cookies/JWT in cross-origin requests
}));

// Routes
app.get("/", (req, res) => res.send("Hello, I am Home Page"));
app.use("/api/auth", authRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port || 4040}`)
);

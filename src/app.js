import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGN,
    credentials: true,
  })
);
app.use(express.json({ limit: "26kb" }));
app.use(express.urlencoded({ extended: true, limit: "26kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// router import
import userRouter from "./routes/user.routes.js";
app.use("/users", userRouter);
//http://localhost:8000/users/register

export { app };

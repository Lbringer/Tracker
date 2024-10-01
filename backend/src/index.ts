import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
app.use(express.json());

import morgan from "morgan";
app.use(morgan("dev"));

import userRouter from "./routes/user";
import todoRouter from "./routes/todo";
import noteRouter from "./routes/note";
import { authMiddleware } from "./middlewares";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", authMiddleware, todoRouter);
app.use("/api/v1/note", authMiddleware, noteRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running at port 3000");
});

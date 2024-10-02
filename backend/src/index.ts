import dotenv from "dotenv";
dotenv.config();

import express, { Response } from "express";
const app = express();
app.use(express.json());

import morgan from "morgan";
app.use(morgan("dev"));

import userRouter from "./routes/user";
import todoRouter from "./routes/todo";
import noteRouter from "./routes/note";
import { authMiddleware } from "./middlewares";
import { StatusCodes } from "http-status-codes";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", authMiddleware, todoRouter);
app.use("/api/v1/note", authMiddleware, noteRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err: Error, req: any, res: Response, next: any) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
});

app.listen(process.env.PORT, () => {
  console.log("Server running at port 3000");
});

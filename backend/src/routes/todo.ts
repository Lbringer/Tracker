import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { createTodo, updateTodo } from "@lbringer237/tracker-common";
const router = Router();

router.post("/", async (req, res) => {
  const prisma = new PrismaClient();
  const { success } = createTodo.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
  try {
    const todo = await prisma.todo.create({
      data: {
        title: req.body.title,
        done: false,
        userId: req.userId,
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ id: todo.id, title: todo.title, done: todo.done });
    return;
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not create new todo" });
  }
});
router.put("/", async (req, res) => {
  const prisma = new PrismaClient();
  const { success } = updateTodo.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
  try {
    const todo = await prisma.todo.update({
      where: {
        id: req.body.id,
      },
      data: {
        done: parseInt(req.body.done) == 1,
      },
    });
    res.status(StatusCodes.OK).json({ id: todo.id });
    return;
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not update todo" });
  }
});
router.get("/", async (req, res) => {
  const prisma = new PrismaClient();
  const inputDate =
    (req.query.queryString as string) || new Date().toISOString().split("T")[0];
  const startDate = new Date(inputDate);
  const endDate = new Date(
    new Date(inputDate).setDate(startDate.getDate() + 1)
  );

  try {
    const todo = await prisma.todo.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
        userId: req.userId,
      },
      select: {
        title: true,
        done: true,
        id: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(StatusCodes.OK).json({ todo });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not fetch todays TODO" });
  }
});
export default router;

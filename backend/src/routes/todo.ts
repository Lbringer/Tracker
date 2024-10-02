import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
const router = Router();

router.post("/", async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const todo = await prisma.todo.create({
      data: {
        title: req.body.title,
        done: false,
        userId: req.userId,
      },
    });
    res.status(StatusCodes.OK).json({ id: todo.id });
    return;
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not create new todo" });
  }
});
router.put("/", async (req, res) => {
  const prisma = new PrismaClient();
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

//Route which gets todays todo

//Route which gets all todo grouped by day and pagination
export default router;

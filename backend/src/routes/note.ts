import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();

router.post("/", async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const note = await prisma.note.create({
      data: {
        content: req.body.content,
        userId: req.userId,
      },
    });
    res.status(StatusCodes.OK).json({ id: note.id });
    return;
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not create new note" });
  }
});

router.put("/", async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const note = await prisma.note.update({
      where: {
        id: req.body.id,
      },
      data: {
        content: req.body.content,
      },
    });
    res.status(StatusCodes.OK).json({ id: note.id });
    return;
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Could not update note" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params["id"];
  const prisma = new PrismaClient();
  const note = await prisma.note.findUnique({
    where: {
      id,
    },
    select: {
      content: true,
      createdAt: true,
      updatedAt: true,
      owner: {
        select: {
          username: true,
        },
      },
    },
  });
  if (!note) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "No such note exists" });
    return;
  }
  res.status(StatusCodes.OK).json(note);
});

router.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  const prisma = new PrismaClient();
  await prisma.note.delete({
    where: {
      id,
    },
  });
  res.status(StatusCodes.OK).json({ message: "Deleted" });
});
export default router;

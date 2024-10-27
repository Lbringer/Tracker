import { createNote, updateNote } from "@lbringer237/tracker-common";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();

router.post("/", async (req, res) => {
  const prisma = new PrismaClient();
  const { success } = createNote.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
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
  const { success } = updateNote.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
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

router.get("/today", async (req, res) => {
  const prisma = new PrismaClient();
  const inputDate = new Date().toISOString().split("T")[0];
  const startDate = new Date(inputDate);
  const endDate = new Date(
    new Date(inputDate).setDate(startDate.getDate() + 1)
  );
  try {
    const notes = await prisma.note.findMany({
      where: {
        updatedAt: {
          gte: startDate,
          lt: endDate,
        },
        userId: req.userId,
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    res.status(StatusCodes.OK).json({ notes });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error while fetching todays notes" });
    return;
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

router.get("/", async (req, res) => {
  const prisma = new PrismaClient();
  const queryString = req.query.queryString as string;
  const page = parseInt(req.query.page as string) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const notes = await prisma.note.findMany({
      where: {
        userId: req.userId,
        ...(queryString && {
          content: {
            contains: queryString,
          },
        }),
      },
      skip,
      take: limit,
    });
    res.status(StatusCodes.OK).json({ notes });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error while fetching notes" });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  const prisma = new PrismaClient();
  try {
    await prisma.note.delete({
      where: {
        id,
        userId: req.userId,
      },
    });
    res.status(StatusCodes.OK).json({ message: "Deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error while deleting note" });
    return;
  }
});
export default router;

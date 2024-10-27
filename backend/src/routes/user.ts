import { signinInput, signupInput } from "@lbringer237/tracker-common";
import { authMiddleware } from "./../middlewares/index";
import { PrismaClient } from "@prisma/client";
import { Request, Router } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
const router = Router();

router.post("/signup", async (req, res) => {
  const prisma = new PrismaClient();
  const { success } = signupInput.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "");
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Could not signup" });
  }
});

router.post("/signin", async (req, res) => {
  const prisma = new PrismaClient();
  const { success } = signinInput.safeParse(req.body);
  if (!success) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid input" });
    return;
  }
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Could not signin" });
    return;
  }
  const token = jwt.sign({ userId: user?.id }, process.env.JWT_SECRET || "");
  res.status(StatusCodes.OK).json({ token });
});

router.get("/", authMiddleware, async (req: Request, res) => {
  const prisma = new PrismaClient();
  const userId = req.userId;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      username: true,
    },
  });
  res.status(StatusCodes.OK).json({ username: user!.username });
});
export default router;

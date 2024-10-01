import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "No token" });
  }
  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || ""
    ) as JwtPayload;
    const prisma = new PrismaClient();
    const user = prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
    });
    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "No user exists" });
    }
    req.userId = payload.userId;
    next();
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Not a valid JWT" });
  }
};

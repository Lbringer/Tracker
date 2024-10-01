import { Router } from "express";
import { PrismaClient } from "@prisma/client/edge";
const router = Router();

router.get("/", async (req, res) => {
  res.json({ hello: "world" });
});
export default router;

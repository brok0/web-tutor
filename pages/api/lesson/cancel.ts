import { PrismaClient } from "@prisma/client";
import CONSTANTS from "../../profile/lessons/constants";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.body;
  await prisma.lesson.update({
    where: {
      id,
    },
    data: {
      state: CONSTANTS.lessonStates.cancelled,
    },
  });

  res.status(200).json({ code: 200, message: "Succesfully updated lesson! " });
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  try {
    const tutors = await prisma.tutor.findMany({ include: { user: true } });
    res.status(200).json(tutors);
  } catch (err) {
    console.log(err.code);

    res.status(400).json({ error: "Error occured" });
  }
};

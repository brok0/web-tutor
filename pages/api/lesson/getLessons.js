import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function (req, res) {
  const { userEmail } = req.body;
  console.log(req.body);

  try {
    const user = await prisma.user.findFirst({ where: { email: userEmail } });

    let lessons;

    lessons = await prisma.lesson.findMany({
      where: {
        studentId: user.id,
      },
    });

    if (!lessons) {
      lessons = await prisma.lesson.findMany({
        where: {
          tutorId: user.id,
        },
      });
    }

    console.log(lessons);
    res.status(200).json(lessons);
  } catch (error) {
    res.status(400).json({ error: "Error occured" });
  }
}

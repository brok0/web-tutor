import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function (req, res) {
  const { userEmail } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { email: userEmail } });
    let lessons = [];

    lessons = await prisma.lesson.findMany({
      where: {
        studentId: user.id,
      },
    });

    if (!lessons.length) {
      //if not found lesson for student, assume its tutor searching and search with tutor id
      // * TODO: probs need better db design
      const tutor = await prisma.tutor.findFirst({ where: { userId: user.id } });

      lessons = await prisma.lesson.findMany({
        where: {
          tutorId: tutor.id,
        },
      });
    }

    res.status(200).json(lessons);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error occured", error });
  }
}

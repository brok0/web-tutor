import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  const { studentEmail, tutorId, date, price } = req.body;
  console.log(req.body);
  const createdLesson = await prisma.lesson.create({
    data: {
      date,
      price,
      student: {
        connect: {
          email: studentEmail,
        },
      },
      tutor: {
        connect: {
          id: tutorId,
        },
      },
    },
  });

  res.status(200).json({ message: "Succesfully created lesson! " + createdLesson.id });
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  const { studentEmail, tutorId, date, price, topic, tutorName, studentName } = req.body;
  console.log(req.body);
  const createdLesson = await prisma.lesson.create({
    data: {
      date,
      price,
      topic,
      tutorName,
      studentName,
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

  res.status(200).json({ code: 200, message: "Succesfully created lesson! " + createdLesson.id });
}

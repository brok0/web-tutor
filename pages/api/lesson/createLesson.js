import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function handler(req, res) {
	const { studentId, tutorId, date, price } = req;

	const createdLesson = await prisma.lesson.create({
		data: {
			studentId,
			tutorId,
			date,
			price,
		},
	});

	res
		.status(200)
		.json({ message: "Succesfully upgraded to tutor! " + createdLesson.id });
}

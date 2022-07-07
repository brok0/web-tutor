import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function handler(req, res) {
	const { studentId, tutorId, date, price } = req.body;

	const createdLesson = await prisma.lesson.create({
		data: {
			date,
			price,
		},
	});

	res
		.status(200)
		.json({ message: "Succesfully created lesson! " + createdLesson.id });
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default function handler(req, res) {
	const upgradeUser = await prisma.tutor.create({
		data: {
			userId: req.userId,
			description: req.description,
			specialization: req.specialization,
			rating: 0,
		},
	});

	res
		.status(200)
		.json({ message: "Succesfully upgraded to tutor! " + upgradeUser.id });
}

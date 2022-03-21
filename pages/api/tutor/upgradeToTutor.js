import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
	const { description, specialization, price, email } = req.body;

	try {
		const upgradeUser = await prisma.tutor.create({
			data: {
				user: {
					connect: {
						email,
					},
				},

				description: description,
				specialization: specialization,
				pricePerLesson: price,
				rating: 0,
			},
		});

		res
			.status(200)
			.json({ message: "Succesfully upgraded to tutor! " + upgradeUser.id });
	} catch (err) {
		console.log(err.code);
		if (err.code === "P2014") {
			res.status(409).json({ message: "Tutor profile already exist" });
		}
		res.status(400).json({ error: "Error occured" });
	}
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  const { specialization, priceRange, time, orderBy } = req.body;
  const { maxPrice, minPrice } = priceRange;

  //const { value, asc } = orderBy; //TODO:  sorting
  try {
    let tutors;
    console.log(parceInt(minPrice));
    if (Number(minPrice) >= 50) {
      tutors = await prisma.tutor.findMany({
        where: {
          specialization: specialization,
          pricePerLesson: {
            gte: Number(minPrice),
          },
        },
      });
    }

    tutors = await prisma.tutor.findMany({
      where: {
        specialization: specialization,
        pricePerLesson: {
          gte: Number(minPrice),
          lte: Number(maxPrice),
        },
      },
    });

    console.log(tutors);
    res.status(200).json(tutors);
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: "Error occured" });
  }
};

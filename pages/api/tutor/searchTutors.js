import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async (req, res) => {
  const { specialization, priceRange, time, orderBy } = req.body;
  const { maxPrice, minPrice } = priceRange;

  //const { value, asc } = orderBy; //TODO:  sorting
  try {
    let tutors;
    const onePrice = minPrice.replace(/>/g, "");
    console.log(onePrice, maxPrice);

    if (onePrice >= 50 && !maxPrice) {
      tutors = await prisma.tutor.findMany({
        where: {
          specialization: specialization,
          pricePerLesson: {
            gte: Number(onePrice),
          },
        },
      });
    } else {
      tutors = await prisma.tutor.findMany({
        where: {
          specialization: specialization,
          pricePerLesson: {
            gte: Number(minPrice),
            lte: Number(maxPrice),
          },
        },
      });
    }

    console.log(tutors);
    res.status(200).json(tutors);
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: "Error occured" });
  }
};

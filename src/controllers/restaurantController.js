const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createRestaurant = async (req, res) => {
  const { name } = req.body;

  const restaurant = await prisma.restaurant.create({
    data: { name },
  });

  res.status(201).json({ message: 'Restaurant created', restaurant });
};

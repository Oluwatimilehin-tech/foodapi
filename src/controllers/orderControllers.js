const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
  const { foodId } = req.body;
  const userId = req.user.id;  // Get from JWT middleware

  const order = await prisma.order.create({
    data: {
      userId,
      foodId,
    },
  });

  res.status(201).json({ message: 'Order created', order });
};

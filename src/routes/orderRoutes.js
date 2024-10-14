const express = require("express");
const { createOrder } = require("../controllers/orderControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);

module.exports = router;

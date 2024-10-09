const express = require('express');
const { createRestaurant } = require('../controllers/restaurantController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createRestaurant);

module.exports = router;

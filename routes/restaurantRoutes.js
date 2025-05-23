const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');

router.get('/category/:slug', controller.getRestaurantsByCategory);

module.exports = router;

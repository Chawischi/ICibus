const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const { requireAuth } = require('../middlewares/authMiddleware');

// Rota para obter todos os restaurantes
router.get('/', requireAuth, restaurantController.getAllRestaurants);

// Rota para criar um restaurante
router.post('/', requireAuth, restaurantController.createRestaurant);

module.exports = router;

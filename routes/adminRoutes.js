// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController');

// Rota para criar restaurante (exemplo)
router.post('/restaurants', controller.createRestaurant);


module.exports = router;

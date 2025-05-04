// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');

router.get('/categories', controller.getAllCategories);
module.exports = router;

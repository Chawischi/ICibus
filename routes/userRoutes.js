const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireAuth } = require('../middlewares/authMiddleware');

// Rota para obter todos os usuários
router.get('/', requireAuth, userController.getAllUsers);

// Rota para criar um usuário
router.post('/', requireAuth, userController.createUser);

module.exports = router;

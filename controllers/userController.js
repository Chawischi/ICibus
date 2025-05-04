const { User } = require('../models'); // Ajuste conforme o nome do seu modelo

// Função para criar um novo usuário
exports.createUser = async (req, res) => {
  const { clerkId, email } = req.body;

  if (!email || !clerkId) {
    return res.status(400).json({ message: 'ClerkId e Email são obrigatórios' });
  }

  try {
    const newUser = await User.create({
      clerkId,
      email,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar o usuário' });
  }
};

// Função para obter todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao obter os usuários' });
  }
};

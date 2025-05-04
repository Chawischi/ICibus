/* // controllers/restaurantController.js
const Restaurant = require('../models/restaurant');
const Category = require('../models/category');

exports.getRestaurantsByCategory = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await Category.findOne({ where: { slug } });
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });

    const restaurants = await category.getRestaurants(); // relacionamento N-N
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar restaurantes' });
  }
};

exports.getRestaurantDetail = async (req, res) => {
  try {
    const { slug } = req.params;
    const restaurant = await Restaurant.findOne({
      where: { slug },
      include: ['Menus'],
    });

    if (!restaurant) return res.status(404).json({ message: 'Restaurante não encontrado' });

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes do restaurante' });
  }
};
*/
const { Restaurant, Category } = require('../models');

exports.createRestaurant = async (req, res) => {
  try {
    const { name, endereco, bannerUrl, category } = req.body;

    if (!name || !endereco || !category) {
      return res.status(400).json({ message: 'Nome, endereço e categoria são obrigatórios.' });
    }

    const categoryFound = await Category.findOne({ where: { slug: category } });
    if (!categoryFound) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }

    const slug = name.toLowerCase().replace(/\s+/g, '-'); // Geração de slug opcional

    const newRestaurant = await Restaurant.create({
      name,
      slug,
      endereco,
      bannerUrl,
      categoryId: categoryFound.id,
    });

    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error('Erro ao criar restaurante:', error);
    res.status(500).json({ error: 'Erro interno ao criar restaurante.' });
  }
};


exports.getRestaurantsByCategory = async (req, res) => {
  try {
    const { slug } = req.params;

    // Buscando a categoria pelo slug
    const category = await Category.findOne({ where: { slug } });
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });

    // Buscando os restaurantes relacionados à categoria
    const restaurants = await category.getRestaurants();
    res.json(restaurants); // Envia os restaurantes para o frontend
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar restaurantes' });
  }
};
  
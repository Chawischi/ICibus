// controllers/categoryController.js
/* const Category = require('../models/category');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};
 */

const { Category } = require('../models');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    
    // Iterando sobre as categorias para logar id, name, slug e iconUrl
    categories.forEach(category => {
      console.log(`ID: ${category.id}, Name: ${category.name}, Slug: ${category.slug}, Icon: ${category.iconUrl}`);

    });

    res.json(categories); 
  } catch (error) {
    console.error("Erro ao buscar categorias:", error); 
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};

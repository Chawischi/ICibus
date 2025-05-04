const createRestaurant = async (req, res) => {
    const { name, address, image, category, userId } = req.body;
  
    if (!name || !address || !category || !userId) {
      return res.status(400).json({ message: 'Campos obrigatórios faltando.' });
    }
  
    try {
      const newRestaurant = await Restaurant.create({
        name,
        address,
        image,
        category,
        userId,
      });
  
      res.status(201).json(newRestaurant);
    } catch (error) {
      console.error('Erro ao criar restaurante:', error);  // Log mais detalhado
      res.status(500).json({ message: 'Erro ao cadastrar restaurante', error: error.message });
    }
  };
  
  exports.getAllRestaurants = async (req, res) => {
    try {
      const restaurants = await Restaurant.findAll();
      return res.status(200).json(restaurants);
    } catch (error) {
      console.error('Erro ao obter restaurantes:', error);  // Log mais detalhado
      return res.status(500).json({ message: 'Erro ao obter os restaurantes', error: error.message });
    }
  };
  
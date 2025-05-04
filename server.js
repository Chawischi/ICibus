const express = require('express');
const cors = require('cors'); // Importando o CORS
const app = express();
const sequelize = require('./config/database'); // Importando a conexão com o banco de dados
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Substitua pela URL do seu frontend
};

// Usando o CORS com as configurações
app.use(cors(corsOptions)); 

app.use(express.json());

// Roteamento de usuários e restaurantes
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);

// Conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

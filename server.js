const express = require('express');
const cors = require('cors'); // Importando o CORS
const app = express();
const sequelize = require('./config/database'); 
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const categoryRoutes = require('./routes/categoryRoutes'); 
const adminRoutes = require('./routes/adminRoutes');

require('dotenv').config();

const PUBLIC = process.env.NEXT_PUBLIC_API;

// Configuração do CORS
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions)); 

app.use(express.json());

app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/category', categoryRoutes); 
app.use('/admin', adminRoutes);

// Conectar ao banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas recriadas com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

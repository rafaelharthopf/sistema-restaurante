const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Configurações do Express.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conexão com o banco de dados MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Rotas para o sistema de restaurante
const orderRoutes = require('./routes/orderRoutes.js');
const menuRoutes = require('./routes/menuRoutes.js');
app.use('/api/orders', orderRoutes);
app.use('/api/menu', menuRoutes);


// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
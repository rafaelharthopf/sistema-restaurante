const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/MenuController');

// Rota para obter todos os itens do cardápio
router.get('/', MenuController.getAllItems);

// Rota para criar um novo item do cardápio
router.post('/', MenuController.createItem);

// Rota para atualizar um item do cardápio existente
router.put('/:itemId', MenuController.updateItem);

// Rota para excluir um item do cardápio existente
router.delete('/:itemId', MenuController.deleteItem);

module.exports = router;
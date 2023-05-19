const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');

// Rota para obter todos os pedidos
router.get('/', OrderController.getAllOrders);

// Rota para criar um novo pedido
router.post('/', OrderController.createOrder);

// Rota para atualizar um pedido existente
router.put('/:orderId', OrderController.updateOrder);

// Rota para excluir um pedido existente
router.delete('/:orderId', OrderController.deleteOrder);

module.exports = router;
const Order = require('../models/Order.js');

// Controlador para manipulação de pedidos
const OrderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      console.error('Erro ao obter os pedidos:', error);
      res.status(500).json({ error: 'Erro ao obter os pedidos' });
    }
  },

  createOrder: async (req, res) => {
    try {
      const { customerName, items } = req.body;
      const order = new Order({ customerName, items });
      await order.save();
      res.json(order);
    } catch (error) {
      console.error('Erro ao criar o pedido:', error);
      res.status(500).json({ error: 'Erro ao criar o pedido' });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const { customerName, items } = req.body;
      const order = await Order.findByIdAndUpdate(orderId, { customerName, items }, { new: true });
      res.json(order);
    } catch (error) {
      console.error('Erro ao atualizar o pedido:', error);
      res.status(500).json({ error: 'Erro ao atualizar o pedido' });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      await Order.findByIdAndDelete(orderId);
      res.sendStatus(204);
    } catch (error) {
      console.error('Erro ao excluir o pedido:', error);
      res.status(500).json({ error: 'Erro ao excluir o pedido' });
    }
  }
};

module.exports = OrderController;
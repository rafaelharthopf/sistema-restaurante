const Menu = require('../models/Menu');

// Controlador para o Gerenciamento de Cardápio
const MenuController = {
  getAllItems: async (req, res) => {
    try {
      const items = await Menu.find();
      res.json(items);
    } catch (error) {
      console.error('Erro ao obter os itens do cardápio:', error);
      res.status(500).json({ error: 'Erro ao obter os itens do cardápio' });
    }
  },

  createItem: async (req, res) => {
    try {
      const { name, description, price, image } = req.body;
      const item = new Menu({ name, description, price, image });
      await item.save();
      res.json(item);
    } catch (error) {
      console.error('Erro ao criar o item do cardápio:', error);
      res.status(500).json({ error: 'Erro ao criar o item do cardápio' });
    }
  },

  updateItem: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      const { name, description, price, image } = req.body;
      const item = await Menu.findByIdAndUpdate(itemId, { name, description, price, image }, { new: true });
      res.json(item);
    } catch (error) {
      console.error('Erro ao atualizar o item do cardápio:', error);
      res.status(500).json({ error: 'Erro ao atualizar o item do cardápio' });
    }
  },

  deleteItem: async (req, res) => {
    try {
      const itemId = req.params.itemId;
      await Menu.findByIdAndDelete(itemId);
      res.sendStatus(204);
    } catch (error) {
      console.error('Erro ao excluir o item do cardápio:', error);
      res.status(500).json({ error: 'Erro ao excluir o item do cardápio' });
    }
  }
};

module.exports = MenuController;
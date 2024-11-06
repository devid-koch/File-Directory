const express = require('express');
const router = express.Router();
const {
  getFolderStructure,
  updateItem,
  deleteItem,
  createItem
} = require('../controllers/controller');

router.post('/directory', createItem);

router.get('/folder-structure', getFolderStructure);

router.put('/directory/:id', updateItem);

router.delete('/directory/:id', deleteItem);

module.exports = router;

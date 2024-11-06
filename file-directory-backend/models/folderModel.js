
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Folder = sequelize.define('Folder', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'personal',
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Folders',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

module.exports = Folder;


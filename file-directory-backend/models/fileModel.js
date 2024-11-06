const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const File = sequelize.define('File', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
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

module.exports = File;
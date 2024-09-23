const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Branch = sequelize.define('Branch', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
});

module.exports = Branch;

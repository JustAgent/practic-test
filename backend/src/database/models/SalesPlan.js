const { DataTypes } = require("sequelize");
const sequelize = require("../db.js");

const SalesPlan = sequelize.define("SalesPlan", {
  saleDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  volume: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  product: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
});
/** {
      id: 1,
      saleDate: '2024-09-17',
      branch: 'Филиал 1',
      quantity: 100,
      amount: 150000,
      product: 'Товар A'
    },
    {
      id: 2,
      saleDate: '2024-09-18',
      branch: 'Филиал 2',
      quantity: 200,
      amount: 300000,
      product: 'Товар B'
    }
  */

module.exports = SalesPlan;

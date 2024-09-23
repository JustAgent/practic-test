const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const Branch = require('./Branch');

const BudgetPlan = sequelize.define('BudgetPlan', {
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sales: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Draft',
  },
});

BudgetPlan.belongsTo(Branch);  // Связь плана с филиалом

module.exports = BudgetPlan;

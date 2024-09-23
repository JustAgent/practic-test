const { Sequelize } = require("sequelize");

// Настройка подключения к базе данных
const sequelize = new Sequelize("budget_plan", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  sync: true,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Unable to connect to PostgreSQL", err));

module.exports = sequelize;

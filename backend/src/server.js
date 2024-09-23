const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database/db.js");
const Branch = require("./database/models/Branch");
const BudgetPlan = require("./database/models/BudgetPlan");
const SalesPlan = require("./database/models/SalesPlan");

async function main() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // Синхронизация базы данных
  await sequelize.sync();

  // CRUD для филиалов
  app.get("/branches", async (req, res) => {
    const branches = await Branch.findAll();
    res.json(branches);
  });

  app.post("/branches", async (req, res) => {
    const branch = await Branch.create(req.body);
    res.json(branch);
  });

  // CRUD для планов
  app.get("/budget-plans", async (req, res) => {
    const plans = await BudgetPlan.findAll({
      include: [Branch],
    });
    res.json(plans);
  });

  app.post("/budget-plans", async (req, res) => {
    const plan = await BudgetPlan.create(req.body);
    res.json(plan);
  });

  // CRUD для филиалов
  app.get("/sales", async (req, res) => {
    const sales = await SalesPlan.findAll();
    res.json(sales);
  });

  app.post("/sales", async (req, res) => {
    const sales = await SalesPlan.create(req.body);
    res.json(sales);
  });

  // Запуск сервера
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main();

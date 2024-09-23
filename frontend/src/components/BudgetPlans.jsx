import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BudgetPlans.css"; // Импортируем стили
import { serverUrl } from "../constants";

const BudgetPlans = () => {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({
    year: "",
    version: "",
    sales: "",
    branchId: "",
  });

  useEffect(() => {
    axios
      .get(`${serverUrl}/budget-plans`)
      .then((res) => setPlans(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addPlan = () => {
    axios
      .post(`${serverUrl}/budget-plans`, newPlan)
      .then((res) => setPlans([...plans, res.data]))
      .catch((err) => console.error(err));
    setNewPlan({ year: "", version: "", sales: "", branchId: "" });
  };

  return (
    <div className="container">
      <h2>Планирование бюджета</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            Год: {plan.year}, Версия:{plan.version}, Продажи:{plan.sales}, Филиал #{plan.id}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newPlan.year}
        onChange={(e) => setNewPlan({ ...newPlan, year: e.target.value })}
        placeholder="Год"
      />
      <input
        type="text"
        value={newPlan.version}
        onChange={(e) => setNewPlan({ ...newPlan, version: e.target.value })}
        placeholder="Версия"
      />
      <input
        type="text"
        value={newPlan.sales}
        onChange={(e) => setNewPlan({ ...newPlan, sales: e.target.value })}
        placeholder="Продажи"
      />
      <input
        type="text"
        value={newPlan.branchId}
        onChange={(e) => setNewPlan({ ...newPlan, branchId: e.target.value })}
        placeholder="Номер филлиала"
      />
      <button onClick={addPlan}>Добавить</button>
    </div>
  );
};

export default BudgetPlans;

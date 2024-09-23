import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Branches from './components/Branches';
import BudgetPlans from './components/BudgetPlans';
import SalesTable from './components/SalesTable';  // Импортируем таблицу продаж

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Филиалы</Link>
            </li>
            <li>
              <Link to="/budget-plans">Планирование бюджета</Link>
            </li>
            <li>
              <Link to="/sales">Продажи</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Branches />} />
          <Route path="/budget-plans" element={<BudgetPlans />} />
          <Route path="/sales" element={<SalesTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

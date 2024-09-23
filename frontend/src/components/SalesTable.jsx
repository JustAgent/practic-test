import React, { useState, useEffect } from "react";
import "./SalesTable.css"; // Импортируем стили (при необходимости)
import axios from "axios";
import { serverUrl } from "../constants";

const SalesTable = () => {
  // Исходные данные о продажах, можно заменить на свои данные
  const [salesData, setSalesData] = useState([]);
  const [newSalesData, setNewSalesData] = useState({
    saleDate: "",
    branch: "",
    quantity: "",
    volume: "",
    product: "",
  });

  // const [plans, setPlans] = useState([]);
  // const [newPlan, setNewPlan] = useState({
  //   year: "",
  //   version: "",
  //   sales: "",
  //   branchId: "",
  // });

  useEffect(() => {
    axios
      .get(`${serverUrl}/sales`)
      .then((res) => {
        console.log(res.data);
        setSalesData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const addSales = () => {
    axios
      .post(`${serverUrl}/sales`, newSalesData)
      .then((res) => setSalesData([...salesData, res.data]))
      .catch((err) => console.error(err));
    setNewSalesData({ saleDate: "", branch: "", quantity: "", volume: "", product: "" });
  };

  return (
    <div className="sales-table">
      <h2>Таблица продаж</h2>
      <table>
        <thead>
          <tr>
            <th>Дата продажи</th>
            <th>Филиал</th>
            <th>Количество проданного товара</th>
            <th>Объем продаж (₽)</th>
            <th>Товар</th>
          </tr>
        </thead>
        <tbody>
          {salesData.length > 0 ? (
            salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.saleDate}</td>
                <td>{sale.branch}</td>
                <td>{sale.quantity}</td>
                <td>{sale.volume}</td>
                <td>{sale.product}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Нет данных о продажах</td>
            </tr>
          )}
        </tbody>
      </table>
      <input
        type="text"
        value={newSalesData.saleDate}
        onChange={(e) => setNewSalesData({ ...newSalesData, saleDate: e.target.value })}
        placeholder="Дата"
      />
      <input
        type="text"
        value={newSalesData.branch}
        onChange={(e) => setNewSalesData({ ...newSalesData, branch: e.target.value })}
        placeholder="Филиал"
      />
      <input
        type="text"
        value={newSalesData.quantity}
        onChange={(e) => setNewSalesData({ ...newSalesData, quantity: e.target.value })}
        placeholder="Количество"
      />
      <input
        type="text"
        value={newSalesData.volume}
        onChange={(e) => setNewSalesData({ ...newSalesData, volume: e.target.value })}
        placeholder="Объем продаж"
      />
      <input
        type="text"
        value={newSalesData.product}
        onChange={(e) => setNewSalesData({ ...newSalesData, product: e.target.value })}
        placeholder="Товар"
      />

      <button onClick={addSales}>Добавить</button>
    </div>
  );
};

export default SalesTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Branches.css"; // Импортируем стили
import { serverUrl } from "../constants";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [newBranch, setNewBranch] = useState("");

  useEffect(() => {
    axios
      .get(`${serverUrl}/branches`)
      .then((res) => setBranches(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addBranch = () => {
    axios
      .post(`${serverUrl}/branches`, { name: newBranch })
      .then((res) => setBranches([...branches, res.data]))
      .catch((err) => console.error(err));
    setNewBranch("");
  };

  return (
    <div className="container">
      <h2>Филиал</h2>
      <ul>
        {branches.map((branch) => (
          <li key={branch.id}>{branch.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newBranch}
        onChange={(e) => setNewBranch(e.target.value)}
        placeholder="Добавить филиал"
      />
      <button onClick={addBranch}>Добавить</button>
    </div>
  );
};

export default Branches;

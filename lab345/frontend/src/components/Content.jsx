import React from "react";
import "../css/Content.css";
import Finances from "./Finances";
import Categories from "./Categories";
import Users from "./Users.jsx";
import Purchases from "./Purchases";
import { Routes, Route } from "react-router-dom";
function Content(props) {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default Content;

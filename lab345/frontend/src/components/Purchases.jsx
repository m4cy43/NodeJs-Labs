import * as React from "react";
import "../css/Purchases.css";
import AddPurchase from "./AddPurchase";
import ShoppingTable from "./ShoppingTable";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Purchases() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="content__nav-title">Purchases</div>
      <hr></hr>
      <div id="puchases-content">
        <div className="add-purchase">
          <AddPurchase />
        </div>

        <div className="purchases-table">
          <ShoppingTable />
        </div>
      </div>
    </>
  );
}

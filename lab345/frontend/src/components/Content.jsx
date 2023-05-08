import React from "react";
import "../css/Content.css";
import DataTable from "./DataTable";
import Finances from "./Finances";
import Categories from "./Categories";
import Users from "./Users.jsx";

function Content(props) {
  return (
    <div className="content">
      {/* cюди передавати title з через навігацію ? */}
      <div className="content__nav-title">Full list</div>
      <hr></hr>
      <DataTable />
      {/* <div className="content__nav-title">Finances</div>
      <hr></hr>
      <Finances /> */}
      {/* <div className="content__nav-title">Categories</div>
      <hr></hr>
      <Categories /> */}
      {/* <div className='content__nav-title'>Users</div>
            <hr></hr>
            <Users /> */}
    </div>
  );
}

export default Content;

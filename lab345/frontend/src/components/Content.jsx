import React from "react";
import "../css/Content.css";
import Finances from "./Finances";
import Categories from "./Categories";
import Users from "./Users.jsx";
import Purchases from "./Purchases";

function Content(props) {
  return (
    <div className="content">
      {/* cюди передавати title з через навігацію ? */}

      {/* <div className='content__nav-title'>Purchases</div>
            <hr></hr>
            <Purchases /> */}

      {/* <div className='content__nav-title'>Finances</div>
            <hr></hr>
            <Finances /> */}

      <div className="content__nav-title">Categories</div>
      <hr></hr>
      <Categories />

      {/* <div className='content__nav-title'>Users</div>
            <hr></hr>
            <Users /> */}
    </div>
  );
}

export default Content;

import React from "react";
import "../css/Finances.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import finPurService from "../services/finPurService";

function Finances() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      _id: "",
      user: {
        _id: "",
        name: "",
        email: "",
        password: "",
        __v: 0,
      },
      purchase: {
        _id: "",
        category: {
          _id: "",
          name: "",
          __v: 0,
        },
        name: "",
        __v: 0,
      },
      sum: 0,
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
  ]);
  // test data
  const [purchases, setPurchases] = useState([
    { id: 1, date: "2021-10-10", sum: 100 },
    { id: 2, date: "2021-10-11", sum: 200 },
    { id: 3, date: "2021-10-12", sum: 300 },
    { id: 4, date: "2021-10-13", sum: 400 },
    { id: 5, date: "2021-10-14", sum: 500 },
    { id: 6, date: "2021-10-15", sum: 600 },
    { id: 7, date: "2021-10-16", sum: 700 },
    { id: 8, date: "2021-10-17", sum: 800 },
    { id: 9, date: "2021-10-18", sum: 900 },
    { id: 10, date: "2021-10-19", sum: 1000 },
    { id: 11, date: "2021-10-20", sum: 1100 },
    { id: 12, date: "2021-10-21", sum: 1200 },
    { id: 13, date: "2021-10-22", sum: 1300 },
    { id: 14, date: "2021-10-23", sum: 1400 },
    { id: 15, date: "2021-10-24", sum: 1500 },
  ]);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    }
    const user = JSON.parse(localStorage.getItem("user"));
    finPurService.getAllRows(user.token).then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="content__nav-title">Finances</div>
      <hr></hr>
      <div className="finances">
        <div className="fin-table-div">
          <div className="fin-table-block">
            <table id="finances-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sum</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.updatedAt.slice(0, 10)}</td>
                    <td>{item.sum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finances;

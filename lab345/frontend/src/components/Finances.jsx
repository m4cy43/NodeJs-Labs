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

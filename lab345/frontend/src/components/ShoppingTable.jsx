import React, { useState, useEffect } from "react";
import "../css/ShoppingTable.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import finPurService from "../services/finPurService";

function ShoppingTable() {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // test data
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} onClick={() => setCurrentPage(number)}>
        {" "}
        {number}{" "}
      </li>
    );
  });

  const delClick = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    finPurService.deleteRow(id, user.token).then(window.location.reload(true));
  };

  return (
    <div id="shopping-table-content">
      <div id="table-div">
        <table>
          <thead>
            <tr>
              <th>Purchase</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item._id}>
                <td>{item.purchase.name}</td>
                <td>{item.purchase.category.name}</td>
                <td>{item.sum}</td>
                <td>{item.updatedAt.slice(0, 10)}</td>
                <td className="del-pur-td">
                  <button
                    className="del-pur-btn"
                    onClick={() => {
                      delClick(item._id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul id="page-numbers">{renderPageNumbers}</ul>
    </div>
  );
}

export default ShoppingTable;

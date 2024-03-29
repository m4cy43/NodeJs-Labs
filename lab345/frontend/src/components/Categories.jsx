import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import "../css/Categories.css";
import { useNavigate } from "react-router-dom";
import categoryService from "../services/categoryService";
import DeleteIcon from "@mui/icons-material/Delete";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // отримати список покупок з апі і зберегти його в стані компонента
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    }
    const user = JSON.parse(localStorage.getItem("user"));
    categoryService
      .getAllCategories(user.token)
      .then((res) => setCategories(res));
  }, []);

  const deleteCat = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    categoryService
      .deleteCategory(id, user.token)
      .then(window.location.reload(true));
  };

  return (
    <>
      <div className="content__nav-title">Categories</div>
      <hr></hr>
      <div id="categories-content">
        <div className="options">
          <AddCategory />
        </div>
        <div className="table-div">
          <div className="table-block">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((purchase) => (
                  <tr key={purchase._id}>
                    <td>{purchase.name}</td>
                    <td className="del-cat-td">
                      <button
                        className="del-cat-btn"
                        onClick={() => {
                          deleteCat(purchase._id);
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
        </div>
      </div>
    </>
  );
}

export default Categories;

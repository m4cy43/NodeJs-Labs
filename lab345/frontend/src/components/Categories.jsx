import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import "../css/Categories.css";
import { useNavigate } from "react-router-dom";
import categoryService from "../services/categoryService";
import DeleteIcon from '@mui/icons-material/Delete';

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  // test data
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      name: "Bread",
    },
    {
      id: 2,
      name: "Milk",

    },
    {
      id: 3,
      name: "Butter",
    },
    {
      id: 4,
      name: "Bread",
    },
    {
      id: 5,
      name: "Milk",
    },
    {
      id: 6,
      name: "Butter",
    },
    {
      id: 7,
      name: "Shoes",
    },
    {
      id: 8,
      name: "Trousers",
    },
    {
      id: 9,
      name: "Bread",
    },
    {
      id: 10,
      name: "Milk",

    },
    {
      id: 11,
      name: "Butter",
    },
    {
      id: 12,
      name: "Milk",
    },
  ]);

  // отримати список покупок з апі і зберегти його в стані компонента
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    }
    const user = JSON.parse(localStorage.getItem("user"));
    categoryService
      .getAllCategories(user.token)
      .then((res) => setPurchases(res));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
                  {/* <th>Category</th> */}
                  {/* <th>Price</th> */}
                  {/* <th>Date</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase._id}>
                    <td>{purchase.name}</td>
                    {/* <td>{purchase.category}</td> */}
                    {/* <td>{purchase.price}</td> */}
                    {/* <td>{purchase.date}</td> */}
                    <td className="del-cat-td">
                      <button className="del-cat-btn"><DeleteIcon /></button>
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

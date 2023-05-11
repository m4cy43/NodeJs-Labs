import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import categoryService from "../services/categoryService";
import finPurService from "../services/finPurService";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 470,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
const buttonStyle = {
  backgroundColor: "#902598",
  color: "#fff",
  width: "12%",
  height: "35px",
  marginBottom: "15px",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "5px",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  "&:hover": {
    backgroundColor: "#902598",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
};
const dropdownStyle = {
  width: "60%",
  padding: "5px 0",
  borderColor: "lightgray",
};

function AddPurchase() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({ name: "", categoryId: "", sum: "" });
  const { name, categoryId, sum } = data;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    categoryService
      .getAllCategories(user.token)
      .then((res) => setCategories(res));
  }, []);
  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onClick = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const data = { name, categoryId, sum };
    finPurService
      .createRow(data, user.token)
      .then(() => window.location.reload(true))
      .catch((er) => {
        alert("Error");
      });
  };
  return (
    <>
      <Button onClick={handleOpen} style={buttonStyle}>
        Add purchase
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 0,
            }}
          >
            <h3 id="modal-modal-title">Enter your new purchase</h3>
            <IconButton onClick={handleClose} sx={{ width: "15%" }}>
              <CloseIcon />
            </IconButton>
          </div>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              variant="outlined"
              sx={{ width: "100%" }}
              name="name"
              onChange={onChange}
            />
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="dropdown-category">
              <label for="categories">Choose a category: </label>
              <select
                name="categoryId"
                id="categories"
                style={dropdownStyle}
                onChange={onChange}
              >
                <option value="" disabled selected>
                  -
                </option>
                {categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-number"
              label="Price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="sum"
              onChange={onChange}
            />
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#902598", width: "20%" }}
            onClick={onClick}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default AddPurchase;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import categoryService from "../services/categoryService";

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
  width: "130px",
  height: "35px",
  margin: "0",
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

function AddCategory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [category, setCategory] = useState({ name: "" });
  const [flag, setFlag] = useState(0);
  const { name } = category;
  const onChange = (e) => {
    setCategory((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name };
    const token = JSON.parse(localStorage.getItem("user")).token;
    categoryService
      .createCategory(data, token)
      .then(() => handleClose())
      .then(window.location.reload(true));
  };

  return (
    <>
      <Button onClick={handleOpen} style={buttonStyle}>
        Add category
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
            <h3 id="modal-modal-title">Enter new category</h3>
            <IconButton sx={{ width: "15%" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={onChange}
            />
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#902598", width: "20%" }}
            onClick={onSubmit}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default AddCategory;

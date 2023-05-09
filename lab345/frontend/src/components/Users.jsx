import React from "react";
import "../css/Users.css";
import { useState, useEffect } from "react";
import userService from "../services/userService";

function Users() {
  const [logFormData, setLogFormData] = useState({
    emailLog: "",
    passwordLog: "",
  });
  const { emailLog, passwordLog } = logFormData;
  const onLogChange = (e) => {
    setLogFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onLogSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: emailLog,
      password: passwordLog,
    };
    userService
      .login(userData)
      .then(() => {
        setLocal(JSON.parse(localStorage.getItem("user")));
      })
      .catch(() => {
        alert("Error");
      });
  };

  const [regFormData, setRegFormData] = useState({
    nameReg: "",
    emailReg: "",
    passwordReg: "",
    password2Reg: "",
  });
  const { nameReg, emailReg, passwordReg, password2Reg } = regFormData;
  const onRegChange = (e) => {
    setRegFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onRegSubmit = (e) => {
    e.preventDefault();
    if (passwordReg !== password2Reg) {
      alert("Error");
    } else {
      const userData = {
        name: nameReg,
        email: emailReg,
        password: passwordReg,
      };
      userService
        .signin(userData)
        .then(() => {
          setLocal(JSON.parse(localStorage.getItem("user")));
        })
        .catch(() => {
          alert("Error");
        });
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    userService.logout();
    setLocal("");
  };

  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <div className="content__nav-title">Users</div>
      <hr></hr>
      <div className="users">
        {localStorage.getItem("user") === null ? (
          <>
            <div className="form-block login">
              <h2>Login</h2>
              <form onSubmit={onLogSubmit}>
                <input
                  type="text"
                  name="emailLog"
                  id="username"
                  placeholder="Email"
                  required
                  onChange={onLogChange}
                />{" "}
                <br />
                <input
                  type="password"
                  name="passwordLog"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={onLogChange}
                />{" "}
                <br />
                <button className="user-btn" type="submit" name="login">
                  Submit
                </button>
              </form>
            </div>

            <div className="form-block register">
              <h2>Register</h2>
              <form onSubmit={onRegSubmit}>
                <input
                  type="text"
                  name="nameReg"
                  id="username"
                  placeholder="Username"
                  required
                  onChange={onRegChange}
                />{" "}
                <br />
                <input
                  type="text"
                  name="emailReg"
                  id="username"
                  placeholder="Email"
                  required
                  onChange={onRegChange}
                />{" "}
                <br />
                <input
                  type="password"
                  name="passwordReg"
                  id="password"
                  placeholder="Password"
                  onChange={onRegChange}
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  name="password2Reg"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  onChange={onRegChange}
                  required
                />{" "}
                <br />
                <button className="user-btn" type="submit" name="register">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="account-block">
            <h2>
              Welcome, <span>{local.name}</span>!
            </h2>
            <form onSubmit={onLogout}>
              <button className="user-btn" type="submit" name="logout">
                Log out
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;

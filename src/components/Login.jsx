import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

 
  const setLoggedIn = props.setLoggedIn;
  const setUsername = props.setUsername;

  async function handleSubmit(e) {
    e.preventDefault();

    const username = formData.username;
    const password = formData.password;

    const loggingInUser = await loginUser(username, password);
    const token = loggingInUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername(username);
    localStorage.setItem("user", username);

    setLoggedIn(true);

    if (token) {
      navigate("/me");
    }
    if (!token) {
      alert(loggingInUser.message);
    }
  }
  return (
    <div className="loginForm">
      <h2>Please sign in</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <span id="inputs">
            <input
              type="text"
              placeholder="username"
              className="username"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.username}
            />
            <input
              type="password"
              placeholder="password"
              className="username"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
      <NavLink to="register">Don't have an account? Sign up here.</NavLink>
    </div>
  );
};

export default Login;

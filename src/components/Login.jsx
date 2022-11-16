import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = (props) => {
  const [formData, setFormData] =useState({
  	username: "",
  	password:""
  })
  const [username, setUsername] = useState([]);
  // const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const getLoggedInUser = props.getLoggedInUser;
  const setLoggedIn = props.setLoggedIn;

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData)
    const username = formData.username;
    const password = formData.password;

    const loggingInUser = await loginUser(username, password);
    const token = loggingInUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setUsername(username);
    localStorage.setItem("user", username);
    console.log(username, "this is username");
    setLoggedIn(true);

    // getLoggedInUser()
    if (token) {
      navigate("/");
    }
    if (!token) {
      alert(loggingInUser.message);
    }
  }
  return (
    <div>
      <h2>Please sign in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className="username" 
         onChange={(e)=> setFormData({...formData, username:e.target.value})}
		 value={formData.username}/>
        <input type="password" placeholder="password" className="username" 
        onChange={(e)=> setFormData({...formData, password:e.target.value})}
		 value={formData.password}/>
        <button type="submit">Submit</button>
      </form>
      <NavLink to="register">Don't have an account? Sign up here</NavLink>
    </div>
  );
};

export default Login;

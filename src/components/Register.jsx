import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData]= useState({
    username:"",
    password:""
  })
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = formData.username;
    const password = formData.password;
    const registeringUser = await registerUser(username, password);
    const token = registeringUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    if (token) {
      navigate("/login");
      alert("Thank you for registering. Please login.");
    }
    if (!token) {
      alert(registeringUser.message);
    }
  }
  return (
    <div className="registerForm">
      <div >
        <h2>Please create a username and password</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <span id="inputs">
        <input type="text" placeholder="username" className="username" 
         onChange={(e)=> setFormData({...formData, username:e.target.value})}
		 value={formData.username}/> 
        <input type="password" placeholder="password" className="username" 
        onChange={(e)=> setFormData({...formData, password:e.target.value})}
        value={formData.password}/>
        <button type="submit">Submit</button>

        <NavLink className="signUpSignIn" to="/login">Already have an account? Sign in here.</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Register;

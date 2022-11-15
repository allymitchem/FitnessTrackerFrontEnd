import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api";



const Login = (props) => {
	const getLoggedInUser = props.getLoggedInUser
	const setLoggedIn = props.setLoggedIn
	const [username, setUsername] = useState([])
	const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const loggingInUser = await loginUser(username, password);
    const token = loggingInUser.token;

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
	setUsername(username)
	setLoggedIn(true)
	// getLoggedInUser()
	if(token){
		navigate('/')
	} 
	if(!token){
		alert(loggingInUser.message)
	}
  }
  return (
    <div>
		<h2>Please sign in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className="username" />
        <input type="password" placeholder="password" className="username" />
        <button type="submit">Submit</button>
      </form>
	  <NavLink to="register">
		Don't have an account? Sign up here
	  </NavLink>
    </div>
  );
};

export default Login;

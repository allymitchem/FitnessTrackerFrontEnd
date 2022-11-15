import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = () => {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
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
    <div>
      <div>
        <h2>Please create username and password</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className="username" />
        <input type="password" placeholder="password" className="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

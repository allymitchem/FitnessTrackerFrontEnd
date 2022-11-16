import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = ({loggedIn, setLoggedIn}) => {
    
    return (
        <div id ="navbar">
            <h2>Fitness Tracker</h2>
            <div className="links">
                {loggedIn ? (
                    <NavLink 
                    id="logout"
                    onClick={()=> {
                        localStorage.removeItem("token")
                        setLoggedIn(false)
                    }}
                    >
                        Logout
                    </NavLink>
                ): (<NavLink id="login" to="/login">
                Login/Register
            </NavLink>)}
                
                <NavLink id="home" to="/">
                    Home
                </NavLink>

                <NavLink id="navbarActivities" to="/activities">
                    Activities
                </NavLink>
                {loggedIn ? (
                    <NavLink  id="myRoutines" to>My Routines</NavLink>
                ):null

                }

            </div>
        </div>
    )

    
}

export default Navbar;
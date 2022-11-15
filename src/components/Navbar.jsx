import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div id ="navbar">
            <h2>Fitness Tracker</h2>
            <div className="links">
                <NavLink id="login" to="/login">
                    Login/Register
                </NavLink>
                <NavLink id="home" to="/">
                    Home
                </NavLink>

                <NavLink id="navbarActivities" to="/activities">
                    Activities
                </NavLink>

            </div>
        </div>
    )

    
}

export default Navbar;
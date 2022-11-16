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
                        localStorage.removeItem('user')
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
                </NavLink >
                <NavLink id="routinesNav" to="/routines">
                    Routines
                </NavLink>
                <NavLink id="navbarActivities" to="/activities">
                    Activities
                </NavLink>
                {loggedIn ? (
                    <NavLink id="myRoutines" to="/me">My Routines</NavLink>
                ):null

                }

            </div>
        </div>
    )

    
}

export default Navbar;
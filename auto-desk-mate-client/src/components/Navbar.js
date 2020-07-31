import React from 'react'; 
import { NavLink } from 'react-router-dom';


function Navbar(){
    const link = {
        color: "white",
        paddingTop: "25px", 
        cursor: "pointer"
    }

    return(
        <div className="navbar">
            <NavLink 
                to="/"
                exact
                style={link}
            >About</NavLink>

            <NavLink
                to="/login"
                exact
                style={link}
            >Login</NavLink>
        </div>
    )

}; 

export default Navbar;
import React from 'react'; 
import { NavLink } from 'react-router-dom';


const  Navbar = () => {
    const link = {
        color: "black",
        paddingTop: "25px", 
        cursor: "pointer"
    }

    return(
        <div className="navbar">
            <NavLink 
                to="/"
                exact
                style={link}
            >Auto Desk Mate</NavLink>

            <NavLink
                to="/login"
                exact
                style={link}
            >Login</NavLink>
        </div>
    )

}; 

export default Navbar;
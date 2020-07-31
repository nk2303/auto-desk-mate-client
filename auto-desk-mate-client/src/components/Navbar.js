import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";




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

            <Navbar
                to="/login"
                exact
                style={link}
            >Login</Navbar>
        </div>
    )

}; 

export default Navbar;
import react from React.Component; 
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import {logout} from "../actions/userAction";



function Navbar(){

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
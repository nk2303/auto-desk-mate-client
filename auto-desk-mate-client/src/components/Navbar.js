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
        </div>
    )

}; 

export default Navbar;
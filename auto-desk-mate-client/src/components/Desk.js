import React from "react";
import './InteractiveArea.css';
import { connect } from 'react-redux';
import { startDeskDrag } from './redux/actions/dragNdropAction';

const Desk = ({deskInfo, startDeskDrag}) => {

    const handleDragStart = () => {
        startDeskDrag(deskInfo);
    }
    return(
        <div 
            draggable 
            className = "desk" 
            onDragStart={handleDragStart}>
            DESK
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startDeskDrag: (desk_id => startDeskDrag(desk_id, dispatch)),
    }
}
export default connect(null, mapDispatchToProps)(Desk)
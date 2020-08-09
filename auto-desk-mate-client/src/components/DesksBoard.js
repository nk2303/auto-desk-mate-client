import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux';
import Desk from './Desk';

const DesksBoard = ({roomInfo}) => {
    console.log(roomInfo.total_desks)
    const [totalDesks, setTotalDesks] = useState(parseInt(roomInfo.total_desks));

    const renderDesks = (desks) => {
        for ( let i = 0; i <= desks; i++) {
            // <Desk/>;
        }
    }
    return(
        <Col md={3}>
            <div>Desk board</div>
            <div className="deskboard">
                {/* { renderDesks(parseInt(roomInfo.total_desks)) } */}
            </div>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getRoomInput: (total_desks, room_width, room_height) => getRoomInput(total_desks, room_width, room_height).then(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {roomInfo: store.roomInfo}
  }

export default connect(mapStateToProps, mapDispatchToProps)(DesksBoard);
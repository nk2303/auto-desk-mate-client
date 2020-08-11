import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux';
import Desk from './Desk';

const DesksBoard = ({roomInfo}) => {
    
    const [deskList, setdeskList] = useState([]);

    useEffect(() =>{
        renderDesks(parseInt(roomInfo.total_desks))
    }, [roomInfo]);

    const renderDesks = (desks) => {
        const list = [];
        for ( let i = 0; i < desks; i++) {
            list.push({size: i});
        }
        setdeskList(list)
    }


    return(
       
        <Col md={3}>
            <div>Desk board</div>
            <div className="deskboard" style={{overflow: 'scroll'}}>
                {deskList.map( desk => <Desk key={desk.size}/>)}
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
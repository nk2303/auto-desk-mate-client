import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import Desk from './Desk';
import {dropDesk} from './redux/actions/dragNdropAction';

const GridBoard = ({roomInfo, gridDeskList, droppedItem, dropDesk}) => {
    const targetRef = useRef();
    const [deskList, setDeskList] = useState(gridDeskList);
    const [roomHeight, setRoomHeight] = useState(200);

    useEffect(() =>{
        calculateHeight(roomInfo)
    }, [roomInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height/roomInfo.room_width;
        setRoomHeight(targetRef.current.offsetWidth*ratio)
    }

    const handleDeskDrop = (e) => {
            dropDesk(droppedItem)  
            console.log(e.screenX)
            console.log(e.screenY)
    }

    return(
        <Col md={9}>
            <div>Grid board</div>
            <div 
                ref={targetRef} 
                style={{height: roomHeight}} 
                className="grid-board" 
                onDragOver={e => e.preventDefault()}
                onDrop={handleDeskDrop}>
                    {gridDeskList.map( desk => <Desk key={desk.id} id={desk.id} />)}
            </div>
        </Col>
    )
}

const mapStateToProps = (store) => {
    return {
        roomInfo: store.roomInfo,
        gridDeskList: store.gridDeskList,
        droppedItem: store.droppedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dropDesk: desk => dropDesk(desk, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridBoard)

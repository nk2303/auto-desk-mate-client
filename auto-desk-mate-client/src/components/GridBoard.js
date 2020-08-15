import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import Desk from './Desk';
import {dropDeskOnGrid} from './redux/actions/dragNdropAction';

const GridBoard = ({roomInfo, gridDeskList, droppedItem, dropDeskOnGrid}) => {
    const targetRef = useRef();
    const [roomHeight, setRoomHeight] = useState(200);

    useEffect(() =>{
        calculateHeight(roomInfo)
    }, [roomInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height/roomInfo.room_width;
        setRoomHeight(targetRef.current.offsetWidth*ratio)
    }

    const handleDeskDrop = (e) => {
        dropDeskOnGrid(droppedItem);  
        console.log(e.screenX);
        console.log(e.screenY);
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
                    {gridDeskList.map( desk => <Desk key={desk.id} deskInfo={desk} />)}
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
        dropDeskOnGrid: desk => dropDeskOnGrid(desk, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridBoard)

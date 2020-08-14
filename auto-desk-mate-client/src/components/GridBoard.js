import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import Desk from './Desk';
import {dropDesk} from './redux/actions/dragNdropAction';

const GridBoard = ({roomInfo, droppedDesk, deskInfo, droppedItem, dropDesk}) => {
    const targetRef = useRef();
    const [deskList, setDeskList] = useState(deskInfo);
    const [roomHeight, setRoomHeight] = useState(200);

    useEffect(() =>{
        calculateHeight(roomInfo)
    }, [roomInfo, deskInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height/roomInfo.room_width;
        setRoomHeight(targetRef.current.offsetWidth*ratio)
    }

    const onDeskDrop = (e) => {
        if(deskList.length){
            console.log(deskList)
            dropDesk(droppedItem)  
            console.log(e.screenX)
            console.log(e.screenY)
        }
        
    }

    const deskMapper = () => {
        return deskList.map( desk => <Desk key={droppedDesk.id} id={droppedDesk.id} />)
    }

    return(
        <Col md={9}>
            <div>Grid board</div>
            <div 
                ref={targetRef} 
                style={{height: roomHeight}} 
                className="grid-board" 
                onDragOver={e => e.preventDefault()}
                onDrop={onDeskDrop}>
                    {deskMapper()}

            </div>
        </Col>
    )
}

const mapStateToProps = (store) => {
    return {
        roomInfo: store.roomInfo,
        droppedDesk: store.dragNdrop,
        deskInfo: store.deskInfo,
        droppedItem: store.droppedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dropDesk: (desk) => dropDesk(desk, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridBoard)

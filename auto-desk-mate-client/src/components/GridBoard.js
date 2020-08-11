import React, {useState, useEffect, useRef} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux'

const GridBoard = ({roomInfo}) => {

    const input = useRef() 
    const [roomHeight, setRoomHeight] = useState(200)

    useEffect(()=> {
        calculateHeight(roomInfo)
    }, [roomInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height / roomInfo.room_width
    }

    return(
        <Col md={9}>
            <div>Grid board</div>
            <div style={{height: roomHeight}} className="grid-board"></div>
        </Col>
    )
}


const mapStateToProps = (store) => {
    return {roomInfo: store.roomInfo}
}
export default connect(mapStateToProps)(GridBoard)
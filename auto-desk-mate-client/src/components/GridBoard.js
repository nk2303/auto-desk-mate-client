import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';

const GridBoard = ({roomInfo}) => {
    const targetRef = useRef();
    console.log(targetRef.current);
    

    const [roomHeight, setRoomHeight] = useState(200);

    useEffect(() =>{
        calculateHeight(roomInfo)
    }, [roomInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height/roomInfo.room_width;
        setRoomHeight(targetRef.current.offsetWidth*ratio)
        console.log(targetRef.current.offsetWidth);

    }
    return(
        <Col md={9}>
            <div>Grid board</div>
            <div ref={targetRef} style={{height: roomHeight}} className="grid-board"></div>
        </Col>
    )
}

const mapStateToProps = (store) => {
    return {roomInfo: store.roomInfo}
  }

export default connect(mapStateToProps, null)(GridBoard)
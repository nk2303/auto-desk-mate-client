import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import Desk from './Desk';


const GridBoard = ({roomInfo, droppedDesk}) => {
    const targetRef = useRef();
    // const [deskList, setDeskList] = useState([]);
    const [roomHeight, setRoomHeight] = useState(200);
    const [dropped, setDropped] = useState(false);

    useEffect(() =>{
        calculateHeight(roomInfo)
    }, [roomInfo]);

    const calculateHeight = (roomInfo) => {
        const ratio = roomInfo.room_height/roomInfo.room_width;
        setRoomHeight(targetRef.current.offsetWidth*ratio)
    }

    const onDeskDrop = () => {
        // if(deskList.length){
            setDropped(true)  
        // }
        
    }

    const deskMapper = () => {
        return <Desk key={droppedDesk.id} id={droppedDesk.id} />
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
                    {dropped ? <Desk key={droppedDesk.id} id={droppedDesk.id} /> : null}
            </div>
        </Col>
    )
}

const mapStateToProps = (store) => {
    return {
        roomInfo: store.roomInfo,
        droppedDesk: store.dragNdrop,
    }
  }

export default connect(mapStateToProps, null)(GridBoard)

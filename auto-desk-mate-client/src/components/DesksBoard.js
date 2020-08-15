import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux';
import Desk from './Desk';
import {dropDeskOnDB} from './redux/actions/dragNdropAction';


const DesksBoard = ({boardDeskList, droppedItem, dropDeskOnDB}) => {
    
    // const [deskList, setdeskList] = useState(deskList);

    useEffect(() =>{

    }, [boardDeskList]);

    const handleDeskDrop = () => {
        dropDeskOnDB(droppedItem);  
    }

    return(
       
        <Col md={3}>
            <div>Desk board</div>
            <div 
                className="deskboard" 
                style={{overflow: 'scroll'}} 
                onDragOver={e => e.preventDefault()}
                onDrop={handleDeskDrop}>
                    {boardDeskList.map( desk => <Desk key={desk.id} deskInfo={desk} />)}
            </div>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dropDeskOnDB: (desk) => dropDeskOnDB(desk, dispatch)
    }
}

const mapStateToProps = (store) => {
    return {
        boardDeskList: store.boardDeskList,
        droppedItem: store.droppedItem
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DesksBoard);


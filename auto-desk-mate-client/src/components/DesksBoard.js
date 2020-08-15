import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux';
import Desk from './Desk';


const DesksBoard = ({boardDeskList}) => {
    
    // const [deskList, setdeskList] = useState(deskList);

    useEffect(() =>{
        // renderDesks(parseInt(deskList.total_desks))
    }, [boardDeskList]);


    return(
       
        <Col md={3}>
            <div>Desk board</div>
            <div className="deskboard" style={{overflow: 'scroll'}}>
                {boardDeskList.map( desk => <Desk key={desk.id} deskInfo={desk} />)}
            </div>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     getDeskInput: (total_desks) => getDeskInput(total_desks).then(dispatch)
    // }
}

const mapStateToProps = (store) => {
    return {boardDeskList: store.boardDeskList}
  }

export default connect(mapStateToProps, mapDispatchToProps)(DesksBoard);


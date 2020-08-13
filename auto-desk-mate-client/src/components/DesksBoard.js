import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';
import { connect } from 'react-redux';
import Desk from './Desk';


const DesksBoard = ({deskInfo}) => {
    
    const [deskList, setdeskList] = useState([]);

    useEffect(() =>{
        renderDesks(parseInt(deskInfo.total_desks))
    }, [deskInfo]);

    // const renderDesks = (desks) => {
    //     const list = [];
    //     for ( let i = 1; i <= desks; i++) {
    //         list.push({id: i});
    //     }
    //     setdeskList(list)
    // }

    const renderDesks = (desks) => {
        
    }


    return(
       
        <Col md={3}>
            <div>Desk board</div>
            <div className="deskboard" style={{overflow: 'scroll'}}>
                {deskList.map( desk => <Desk key={desk.id} id={desk.id} />)}
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
    return {deskInfo: store.deskInfo}
  }

export default connect(mapStateToProps, mapDispatchToProps)(DesksBoard);


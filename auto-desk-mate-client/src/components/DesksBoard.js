import React from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';

const DesksBoard = () => {

    return(
        <Col md={3}>
            <div>Desk board</div>
            <div className="deskboard"></div>
        </Col>
    )
}

export default DesksBoard
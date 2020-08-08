import React from 'react';
import Col from 'react-bootstrap/Col';
import './InteractiveArea.css';

const GridBoard = () => {

    return(
        <Col md={9}>
            <div>Grid board</div>
            <div className="gird-board"></div>
        </Col>
    )
}

export default GridBoard
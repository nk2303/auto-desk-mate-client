import React from 'react';
import Button from 'react-bootstrap/Button';
import './InteractiveArea.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GridBoard from './GridBoard';
import DesksBoard from './DesksBoard';

const InteractiveArea = () => {

    return(
        <Col md={9}>
            <Row>
            <GridBoard/>
            <DesksBoard/>
            </Row>
        </Col>
    )
}

export default InteractiveArea
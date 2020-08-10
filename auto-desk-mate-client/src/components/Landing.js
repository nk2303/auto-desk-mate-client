import React from 'react';
import InteractiveArea from './InteractiveArea';


//Bootstrap 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//components 
import UserInputForm from './UserInputForm.js'

const Landing = () =>{

    return(
        <Container className="intro-text">
            <Row>
                <Col>Welcome to Auto Desk Mate, a desk organizing application!</Col>
            </Row>
            <Row>
                <Col xs={2} md={2}> <UserInputForm /></Col>
                <InteractiveArea/>
            </Row>
        </Container>
    )
}

export default Landing
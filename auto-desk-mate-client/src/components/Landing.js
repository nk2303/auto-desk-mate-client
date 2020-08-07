import React from 'react';

//Bootstrap 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//components 
import UserInputForm from './UserInputForm.js'

const Landing = () =>{

    return(
        <Container>
        <Row>
            Welcome to Auto Desk Mate, a desk organizing application!
        </Row>
        <Row>
            <Col xs={3} md={3}> <UserInputForm /></Col>
            <Col md={3}> <UserInputForm /></Col>
        </Row>
        </Container>
    )
}

export default Landing
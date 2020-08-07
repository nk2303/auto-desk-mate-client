import React from 'react';
import InteractiveArea from './InteractiveArea';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Landing = () =>{

    return(
        <Container>
            <Row>Welcome to Auto Desk Mate, a desk organizing application! </Row>

            <InteractiveArea/>
        </Container>
    )
}

export default Landing
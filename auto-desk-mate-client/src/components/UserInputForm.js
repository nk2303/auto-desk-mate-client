import React from 'react';
import Form from 'react-bootstrap/Form';


const UserInputForm = () =>{

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="userInputFormDesk">
                <Form.Label>Number of Desks</Form.Label>
                <br />
                <Form.Control type="number" placeholder="Enter Number" />
                </Form.Group>
  
                <Form.Group controlId="userInputFormWidth">
                <Form.Label>Width in Feet</Form.Label>
                <br />
                <Form.Control type="number" placeholder="Width in Feet" />
                <br />
                <Form.Text className="text-muted">
                    Please round up to the nearest whole number.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="userInputFormHeight">
                <Form.Label>Height in Feet</Form.Label>
                <br />
                <Form.Control type="number" placeholder="Height in Feet" />
                <br />
                <Form.Text className="text-muted">
                    Please round up to the nearest whole number.
                </Form.Text>
                </Form.Group>
                <input type="submit"></input>
            </Form>
  
        
    )
}

export default UserInputForm;
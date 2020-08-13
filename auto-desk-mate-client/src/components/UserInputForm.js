import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {getRoomInput, getDeskInput} from './redux/actions/roomInputAction';
import { connect } from 'react-redux';


const UserInputForm = ({getRoomInput, getDeskInput}) =>{

    const [desks, setDesks] = useState('');
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(200);

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        //convert the number of desks into an array
        //array of objects {id, student_name :null, x-coordidate null, y-coordiate: null}
        //call 2 functions, one is for the desk array, the other is for width and height
        getRoomInput(width, height);
        getDeskInput(desks)

    }
    const handleDesksChange = e => { setDesks(e.target.value) };
    const handleWidthChange = e => { setWidth(e.target.value) };
    const handleHeightChange = e => { setHeight(e.target.value) }

    return(
        
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="userInputFormDesk">
                <Form.Label>Number of Desks</Form.Label>
                <br />
                <Form.Control 
                    type="number" 
                    placeholder="Enter number of desks" 
                    onChange={handleDesksChange}
                    value={desks}
                    />
                </Form.Group>

                <Form.Group controlId="userInputFormWidth">
                <Form.Label>Width in Feet</Form.Label>

                <br />
                
                <Form.Control 
                    type="number" 
                    placeholder="Width in Feet" 
                    onChange={handleWidthChange}
                    value={width}
                    />
                <Form.Text className="text-muted">
                    Please round up to the nearest whole number.
                </Form.Text>
                <br />
               
                </Form.Group>

                <Form.Group controlId="userInputFormHeight">
                <Form.Label>Height in Feet</Form.Label>
                <br />
                <Form.Control 
                    type="number" 
                    placeholder="Height in Feet" 
                    onChange={handleHeightChange}
                    value={height}
                    />
                <Form.Text className="text-muted">
                    Please round up to the nearest whole number.
                </Form.Text>
                </Form.Group>
                <input type="submit"></input>
            </Form>
  
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRoomInput: (room_width, room_height) => getRoomInput(room_width, room_height, dispatch),
        getDeskInput: (total_desks) => getDeskInput(total_desks, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(UserInputForm);
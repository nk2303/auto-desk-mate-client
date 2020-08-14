  
const DRAG_INITIAL_STATE = {id: null, student_name: null, xCoordidate: null, yCoordiate: null};

export const dragNdropReducer = (state = DRAG_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ON_DESK_DRAG':
            return action.payload;
        
        default:
            return state;
    }
    
}
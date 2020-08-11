  
const ROOM_INITIAL_STATE = {total_desks: "0", room_width: "0", room_height: "0"}

export const roomInfoReducer = (state = ROOM_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ROOM_INPUT':
            return action.payload;
        
        default:
            return state;
    }
    
}
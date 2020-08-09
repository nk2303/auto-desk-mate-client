const ROOM_INITIAL_STATE = {total_desks: null, room_width: null, room_height: null}

export const roomInfoReducer = (state = ROOM_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ROOM_INPUT':
            return action.payload;
        
        default:
            return state;
    }
    
}
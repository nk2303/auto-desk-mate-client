const DESK_BOARD_INITIAL_STATE = [];

export const deskInfoReducer = (state = DESK_BOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DESK_INPUT':
            return action.payload;
        case 'ON_DESK_DROP':
            return state.filter(desk => desk.id !== action.payload.id);
        
        default:
            return state;
    }
    
}
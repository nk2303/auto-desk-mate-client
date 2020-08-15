const DESK_BOARD_INITIAL_STATE = [];

export const deskInfoReducer = (state = DESK_BOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DESK_INPUT':
            return action.payload;
        case 'ON_GRID_BOARD_DROP':
            if (state.find( desk => desk.id === action.payload.id)) {
                return state.filter(desk => desk.id !== action.payload.id)
            } else {
                return state
            }
        case 'ON_DESK_BOARD_DROP':
            if (state.find( desk => desk.id === action.payload.id)) {
                return state
            } else {
                return [...state, action.payload];
            }
            
        
        default:
            return state;
    }
    
}
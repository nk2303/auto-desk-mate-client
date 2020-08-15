const GRID_BOARD_INITIAL_STATE = [];

export const gridInfoReducer = (state = GRID_BOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ON_GRID_BOARD_DROP':
            return [...state, action.payload];
        case 'ON_DESK_BOARD_DROP':
            return state.filter(desk => desk.id !== action.payload.id);
        
        default:
            return state;
    }
    
}
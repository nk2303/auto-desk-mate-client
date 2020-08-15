const GRID_BOARD_INITIAL_STATE = [];

export const gridInfoReducer = (state = GRID_BOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ON_DESK_DROP':
            return [...state, action.payload];
        
        default:
            return state;
    }
    
}
const GRID_BOARD_INITIAL_STATE = [];

export const gridInfoReducer = (state = GRID_BOARD_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ON_GRID_BOARD_DROP':
            if (state.find( desk => desk.id === action.payload.id)) {
                return state;
            } else {
                return [...state, action.payload];
            }
        case 'ON_DESK_BOARD_DROP':
            if (state.find( desk => desk.id === action.payload.id)) {
                return state.filter(desk => desk.id !== action.payload.id);
            } else {
                return state
            }
        default:
            return state;
    }
    
}
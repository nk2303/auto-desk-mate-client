const DESK_INITIAL_STATE = [];

export const deskInfoReducer = (state = DESK_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DESK_INPUT':
            return action.payload;
        case 'ON_DESK_DROP':
            return [...state, action.payload];
        
        default:
            return state;
    }
    
}
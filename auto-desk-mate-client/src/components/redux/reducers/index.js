import userReducer from './userReducer'; 
import {roomInfoReducer, deskInfoReducer} from './roomInputReducer'
import {combineReducers} from 'redux'; 
import {dragNdropReducer} from './dragNdropReducer'

export default combineReducers({
    userContext: userReducer,
    roomInfo: roomInfoReducer,
    deskInfo: deskInfoReducer,
    dragNdrop: dragNdropReducer,
});
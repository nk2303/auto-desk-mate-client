import userReducer from './userReducer'; 
import {roomInfoReducer} from './roomInputReducer'
import {combineReducers} from 'redux'; 
import {dragNdropReducer} from './dragNdropReducer'

export default combineReducers({
    userContext: userReducer,
    roomInfo: roomInfoReducer,
    dragNdrop: dragNdropReducer,
});
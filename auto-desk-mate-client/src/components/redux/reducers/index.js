import userReducer from './userReducer'; 
import {roomInfoReducer} from './roomInputReducer'
import {deskInfoReducer} from './deskInputReducer'
import {combineReducers} from 'redux'; 
import {dragNdropReducer} from './dragNdropReducer'

export default combineReducers({
    userContext: userReducer,
    roomInfo: roomInfoReducer,
    deskInfo: deskInfoReducer,
    droppedItem: dragNdropReducer,
});
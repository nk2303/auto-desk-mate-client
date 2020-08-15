import userReducer from './userReducer'; 
import {roomInfoReducer} from './roomInputReducer'
import {deskInfoReducer} from './deskBoardReducer'
import {combineReducers} from 'redux'; 
import {dragNdropReducer} from './dragNdropReducer'
import {gridInfoReducer} from './gridBoardReducer';

export default combineReducers({
    userContext: userReducer,
    roomInfo: roomInfoReducer,
    boardDeskList: deskInfoReducer,
    droppedItem: dragNdropReducer,
    gridDeskList: gridInfoReducer,
});
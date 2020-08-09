import userReducer from './userReducer'; 
import {roomInfoReducer} from './roomInputReducer'
import {combineReducers} from 'redux'; 


export default combineReducers({
    userContext: userReducer,
    roomInfo: roomInfoReducer
});
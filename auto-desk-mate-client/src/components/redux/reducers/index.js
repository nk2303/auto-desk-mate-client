import userReducer from './user'; 

import {combineReducers} from 'redux'; 


export default combineReducers({
    userContext: userReducer
});
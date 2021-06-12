import { combineReducers } from 'redux';
import modalReducer from 'reducers/modal'



export default combineReducers({
    modal: modalReducer
});
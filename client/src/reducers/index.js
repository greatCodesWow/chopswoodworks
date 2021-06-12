import { combineReducers } from 'redux';
import modalReducer from 'reducers/modal'
import modalData from 'reducers/modalData';



export default combineReducers({
    modal: modalReducer,
    modal_data: modalData
});
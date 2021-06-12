import { SHOW_MODAL, HIDE_MODAL } from 'actions/types';

const initialState = false;

export default function(state = initialState, action){
    switch(action.type){
        case SHOW_MODAL:
            console.log("payload: ", action.payload)
            return { ...state, modal: action.payload };
        case HIDE_MODAL:
            console.log("payload: ", action.payload)
            return initialState;
        default:
            return state;
    }
}
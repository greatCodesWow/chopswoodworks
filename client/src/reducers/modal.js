import { SHOW_MODAL, HIDE_MODAL } from 'actions/types';

const initialState = false;

export default function(state = initialState, action){
    switch(action.type){
        case SHOW_MODAL:
            return { ...state, modal: action.payload };
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}
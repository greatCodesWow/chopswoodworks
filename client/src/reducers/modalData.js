import { MODAL_PIECE } from 'actions/types';

const initialState = false;

export default function(state = initialState, action){
    switch(action.type){
        case MODAL_PIECE:
            return { ...state, modal_data: action.payload };
        default:
            return state;
    }
}
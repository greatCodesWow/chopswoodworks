import { SHOW_MODAL, HIDE_MODAL, MODAL_PIECE } from 'actions/types';

export function showModal(modal_action, data){
    return{
        type: SHOW_MODAL,
        payload: modal_action
    };
};

export function hideModal(modal_action){
    return {
        type: HIDE_MODAL,
        payload: modal_action
    };
};

export function modalData(data){
    return {
        type: MODAL_PIECE,
        payload: data
    }
}
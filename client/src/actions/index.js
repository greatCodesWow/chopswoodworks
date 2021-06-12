import { SHOW_MODAL, HIDE_MODAL } from 'actions/types';

export function showModal(modal_action){
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
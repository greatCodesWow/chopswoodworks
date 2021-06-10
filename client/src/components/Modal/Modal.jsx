import React from 'react'

function Modal({showModal, closeModal}) {
    return (
        <div className="modal-wrapper" style={{ opacity: showModal ? '1' : '0'}}>
            <div className="modal-header">
                <p>This is the art piece you are looking at</p>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <img src="" alt="art" />
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

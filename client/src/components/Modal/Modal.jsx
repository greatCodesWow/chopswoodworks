import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { connect }  from 'react-redux';
import * as actions from 'actions';
import "./Modal.css"

function Modal(props) {

    useEffect(()=> {

        console.log("modal: ", props.modal)
    }, [props.modal])

    const closeModal = () => {
        console.log("close")
        props.hideModal(false)
    }
    
    if(props.modal == false) return null;

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="overlay-style" onClick={closeModal}>
            </div>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <p>Displaying Art Piece</p>
                    <span onClick={closeModal}>X</span>
                </div>
                <div>
                    <div className="modal-content">
                        <img  src="" alt="art"></img>
                        <h4>Name</h4>
                        <p>lorem ipsum dolor sit amet, consectetur adip occ</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={closeModal}>Close</button> 
                    </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('portal')
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}



export default connect(mapStateToProps, actions)(Modal);

import './Piece.css';
import React from 'react';
import { connect }  from 'react-redux';
import * as actions from 'actions';

function Piece(props) {

    const openModal = () => {
        console.log("Modal", props.modal)
        props.showModal(true);
    }

    return (
        <div className="container">
            <div className="card">
                <img src="" alt="art"  />
                <div className="body">
                    <h4><b>Name</b></h4>
                    <p>Availability: </p>
                    <button className="btn-openModal" onClick={openModal}>Open Modal</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps, actions)(Piece);
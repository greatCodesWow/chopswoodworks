import './Piece.css';
import React from 'react';
import { connect }  from 'react-redux';
import * as actions from 'actions';

function Piece(props) {

    const openModal = () => {
        console.log("Modal", props.modal)
        props.modalData(id)
        props.showModal(true);
    }

    const { id, name, description, availability, image } = props.data;

    return (
        <div className="container">
            <div className="card">
                <img src={image} alt="art"  />
                <div className="body">
                    <h4><b>{name} {id}</b></h4>
                    <p>{availability ? 'Available' : 'Sold Out'} </p>
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
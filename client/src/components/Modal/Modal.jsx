import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { connect }  from 'react-redux';
import * as actions from 'actions';
import "./Modal.css"
import testData from '../testData'

function Modal(props) {

    let result;
    let modalId;

    useEffect(()=> {
        
    }, [props.modal])


    const CreateModal = () => {
        const data = testData;
        modalId = props.modal_data.modal_data
        result = data.filter((data) =>{
            if (data.id === modalId){
                return data;
            }
        });
        const { id, availability, description, image, name } = result[0];
        return(
            <React.Fragment>
                        <div className="overlay-style" onClick={closeModal}>
                        </div>
                        <div className="modal-wrapper">
                            <div className="modal-header">
                                <p>{}</p>
                                <span onClick={closeModal}>X</span>
                            </div>
                            <div>
                                <div className="modal-content">
                                    <img  src={image} alt="art"></img>
                                    <h4>{name}</h4>
                                    <p>{description}</p>
                                </div>
                                <div>
                                    {(availability) ? <form>
                                        <p>Interested in this piece?</p>
                                        <input type="email" placeholder="Email" />
                                        <button >send</button>
                                    </form>
                                    : null}
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-button" onClick={closeModal}>Close</button> 
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        )
    }

    const closeModal = () => {
        console.log("close")
        props.hideModal(false)
    }


    
    if(props.modal === false) return null;

    return ReactDom.createPortal(
        CreateModal()
        ,document.getElementById('portal')
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        modal_data: state.modal_data
    }
}



export default connect(mapStateToProps, actions)(Modal);

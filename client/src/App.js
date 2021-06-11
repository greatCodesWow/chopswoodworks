import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import './App.css';
import DisplayPieces from './components/DisplayPieces/DisplayPieces';



function App() {

  const [ showModal, setShowModal ] = useState(false);

    useEffect(()=> { 
        console.log(showModal); 
    }, [showModal]);


    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

  return (
    <div>
      { showModal==true ? <div onClick={closeModal} className="back-drop"></div> : null }
      <Navbar />
      <div className="App">
        { showModal==true ? <Modal showModal={showModal} closeModal={closeModal} /> : null}
        <DisplayPieces closeModal={closeModal} openModal={openModal} showModal={showModal}/>
        <Router >
          {/* All of the routes will go in here */}
        </Router>
      </div>
    </div>
    
  );
}

export default App;

import React from 'react';
import { connect }  from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import './App.css';
import DisplayPieces from './components/DisplayPieces/DisplayPieces';
import * as actions from 'actions';




function App(props) {

  return (
  <Router>
    <Modal />
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/pieces">
            <DisplayPieces />
          </Route>
        </Switch>
    </div>    
  </Router>
  );
}  

const mapStateToProps = state => {
  return {
      modal: state.modal
  }
}

export default connect(mapStateToProps, actions)(App);
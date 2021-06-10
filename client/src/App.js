import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router >
        {/* All of the routes will go in here */}
      </Router>
    </div>
  );
}

export default App;

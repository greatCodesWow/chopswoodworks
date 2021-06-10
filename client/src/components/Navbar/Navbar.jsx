import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active" >Home</a>
            <a href="#pieces">Pieces</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            
        </div>
    )
}

export default Navbar

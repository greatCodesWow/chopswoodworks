import React from 'react';
import './Navbar.css'
import { withRouter, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="topnav" id="myTopnav">
            <ul>
                <Link to='/'>
                    <li className="active" >Home</li>
                </Link>
                <Link to='/pieces'>
                    <li >Pieces</li>
                </Link>
                <Link to='/contact'>
                    <li >Contact</li>
                </Link>
                <Link to='/about'>
                    <li >About</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default withRouter(Navbar)

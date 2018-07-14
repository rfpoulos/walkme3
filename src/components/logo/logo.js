import React from 'react';
import './style.css';
import logo from '../../images/walkme-nav.png';

let Logo = () =>
    <div className="logo-container">
        <img src={ logo } 
            className="logo" 
            alt="Walk Me Logo" 
        />
    </div>

export default Logo;
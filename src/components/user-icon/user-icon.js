import React from 'react';
import './style.css';

let UserIcon = ({ src, alt, onClick }) =>
    <div className="user-icon-container">
        <img 
            className="user-icon"
            src={ src }
            alt={ alt }
            onClick={ onClick }
        />
    </div>

export default UserIcon;
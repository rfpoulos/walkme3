import React from 'react';
import './style.css';

export default ({ 
    src, 
    alt, 
    onClick, 
}) =>
    <div className="user-icon-container">
        <img className="user-icon"
            src={ src }
            alt={ alt }
            onClick={ onClick }
        />
    </div>
import React from 'react';
import './style.css';

let UserIcon = ({ src, alt, onClick, className }) =>
    <div className={ 'user-icon-container ' + className }>
        <img 
            className="user-icon"
            src={ src }
            alt={ alt }
            onClick={ onClick }
        />
    </div>

export default UserIcon;
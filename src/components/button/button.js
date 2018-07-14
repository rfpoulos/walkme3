import React from 'react';
import './style.css';

let Button = ({ 
    text, 
    onClick,
}) =>
    <button className="button" 
        onClick={ onClick }>
            { text }
    </button>

export default Button;
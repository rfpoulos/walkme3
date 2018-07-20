import React from 'react';
import './style.css';

export default ({ 
    text, 
    onClick,
}) =>
    <button className="button" 
        onClick={ onClick }>
        { text }
    </button>
import React from 'react';
import './style.css';

export default ({ 
    type, 
    placeholder, 
    value, 
    onChange,
}) =>
    <input className="input"
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } 
    />
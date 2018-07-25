import React from 'react';
import './style.css';

export default ({ 
    type, 
    placeholder, 
    value, 
    onChange,
    style,
}) =>
    <input className="input"
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } 
        style={ style }
        onClick={ (event) => {
            event.target.focus()
            event.target.select()
        }}
    />
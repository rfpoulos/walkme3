import React from 'react';
import './text-input.css';

export default ({ 
    type, 
    placeholder, 
    value, 
    onChange,
    style,
    src,
    alt,
    onClick,
}) =>
    <div className="icon-left-container">
        <img src={ src }
            className="input-icon"
            alt={ alt }
            onClick={ onClick }
        />
        <input className="input padding-left"
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange } 
            style={ style }
            onClick={ (event) => event.target.select() }
        />
    </div>
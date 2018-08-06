import React from 'react';
import {
    container,
    padding,
    icon,
} from './text-input-style';

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
    <div style={ container }>
        <img src={ src }
            style={ icon }
            alt={ alt }
            onClick={ onClick }
        />
        <input style={ padding }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange } 
        />
    </div>
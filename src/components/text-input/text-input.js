import React from 'react';
import {
    input,
} from './text-input-style';

export default ({ 
    type, 
    placeholder, 
    value, 
    onChange,
    style,
}) =>
    <input style={ input }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange } 
        onClick={ (event) => { event.target.select() } }
    />
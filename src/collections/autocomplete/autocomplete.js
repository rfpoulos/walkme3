import React from 'react';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';
import {
    autocomplete,
    results
} from './autocomplete-style'

export default ({
    value, 
    onClick,
    onChange,
    placeholder,
}) =>
    <div style={ autocomplete }>
        <TextInput type="text"
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
        />
        <ul style={ results }>
        </ul>
    </div>
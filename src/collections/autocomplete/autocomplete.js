import React from 'react';
import TextInput from '../../components/text-input/text-input';
import {
    autocomplete,
    list,
    listItem,
} from './autocomplete-style'

export default ({
    value, 
    onClick,
    onChange,
    placeholder,
    results,
}) =>
    <div style={ autocomplete }>
        <TextInput type="text"
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
        />
        <ul style={ list }>
        {
            results.map((result, i) =>
                <li key={ i }
                    style={ listItem }
                >
                    { result }
                </li>
            )
        }
        </ul>
    </div>
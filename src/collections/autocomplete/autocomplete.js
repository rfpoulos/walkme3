import React from 'react';
import TextInput from '../../components/text-input/text-input';
import {
    autocomplete,
    list,
    listItem,
    listContainer,
} from './autocomplete-style'

export default ({
    value, 
    resultOnClick,
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
        <div style={ listContainer }>
            <ul style={ list }>
            {
                results.map((result, i) =>
                    <li key={ i }
                        style={ listItem }
                        onClick={ resultOnClick(result) }
                    >
                        { result.text }
                    </li>
                )
            }
            </ul>
        </div>
    </div>
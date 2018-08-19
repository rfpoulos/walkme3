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
    topFixedResults = [],
    bottomFixedResults = [],
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
                topFixedResults.map((result, i) =>
                    <li key={ i }
                        style={ listItem }
                        onClick={ result.onClick }
                    >
                        { result.text }
                    </li>
                )
            }
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
            {
                bottomFixedResults.map((result, i) =>
                    <li key={ i }
                        style={ listItem }
                        onClick={ result.onClick }
                    >
                        { result.text }
                    </li>
                )
            }
            </ul>
        </div>
    </div>
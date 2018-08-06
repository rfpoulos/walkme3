import React from 'react';
import Icon from '../svg-icon/medium/medium';
import {
    container,
    options,
} from './drop-down-style';

export default ({
    iconSvg, 
    alt, 
    onChange,
    value,
    options,
}) =>
    <div style={ container }>
        <Icon src={ iconSvg }
            alt={ alt }
        />
        <select className="options"
            onChange={ onChange } 
            value={ value }
        >
        {
            options.map((option, i) =>
                <option key={i}
                    value={ option.value }>
                    { option.text }
                </option>
            )
        }
        </select>
    </div>
import React from 'react';
import './style.css';

export default ({
    iconSvg, 
    alt, 
    onChange,
    value,
    options,
}) =>
    <div className="options-container">
        <img className="options-icon"
            src={ iconSvg }
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
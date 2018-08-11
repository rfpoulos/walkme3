import React from 'react';
import {
    container,
    icon,
} from './user-icon-style';
export default ({ 
    src, 
    alt, 
    onClick, 
}) =>
    <div style={ container }>
        <img style={ icon }
            src={ src }
            alt={ alt }
            onClick={ onClick }
        />
    </div>
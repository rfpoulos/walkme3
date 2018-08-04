import React from 'react';
import { 
    thumbnail,
    container,
} from './thumbnail-style';

export default ({
    src,
    alt,
    onClick,
}) =>
    <div style={ container }>
        <img style={ thumbnail } 
            src={ src }
            alt={ alt }
            onClick={ onClick }
        />
    </div>
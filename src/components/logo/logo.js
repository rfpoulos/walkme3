import React from 'react';
import { 
    logo,
    container,
} from './logo-style';
import Logo from '../../images/walkme-nav.png';

export default () =>
    <div style={ container }>
        <img src={ Logo } 
            style={ logo } 
            alt="Walk Me Logo" 
        />
    </div>
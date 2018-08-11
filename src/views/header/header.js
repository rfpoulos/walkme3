import React from 'react';
import Logo from '../../components/logo/logo';
import { header } from './header-style';

export let Header = () =>
    <header style={ header }>
        <Logo />
    </header>


export default Header;
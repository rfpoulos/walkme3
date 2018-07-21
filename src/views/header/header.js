import React from 'react';
import './style.css';
import Logo from '../../components/logo/logo'
import Menu from '../../components/menu/menu';

export let Header = ({ 
    updateMenuOpen, 
    menuOpen, 
    userObject,
    handleToggle,
}) =>
    <header className="header">
        <Logo />
    </header>


export default Header;
import React from 'react';
import './menu.css';

let Menu = ({ menuOpen }) =>
    <ul className={menuOpen.toString()}>
        <li>Content!</li>
    </ul>

export default Menu;
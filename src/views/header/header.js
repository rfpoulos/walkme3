import React from 'react';
import './header.css';
import { 
    withState,
    withHandlers,
    compose
} from 'recompose';
import Menu from '../../components/menu/menu';


let headerDumb = ({ menuOpen, openClose }) =>
    <header className="header" onClick={ openClose }>
        <Menu menuOpen={ menuOpen } />
        <img />
    </header>

let Header = compose(
    withState('menuOpen', 'isOpen', false),
    withHandlers({
        openClose: ({ isOpen, menuOpen }) => () =>
            isOpen(!menuOpen),
        }
    )
)(headerDumb)


export default Header;
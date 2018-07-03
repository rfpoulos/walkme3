import React from 'react';
import './style.css';
import { 
    withState,
    withHandlers,
    compose
} from 'recompose';
import FullMenu from '../../components/menu/full-menu/full-menu';


let headerDumb = ({ menuOpen, openClose }) =>
    <header className="header" onClick={ openClose }>
        <FullMenu menuOpen={ menuOpen } />
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
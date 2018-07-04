import React from 'react';
import './style.css';
import helpers from './helpers';
import hamburger from '../../images/bars-solid.svg';
import Logo from '../../components/logo/logo'
import { updateMenuOpen } from '../../redux/actions';
import { connect } from 'react-redux';

let HeaderDumb = ({ updateMenuOpen, menuOpen }) =>
    <header className="header">
        <img className="hamburger" src={ hamburger } 
            onClick={ updateMenuOpen(!menuOpen) } alt="Menu"/>
        <Logo />
    </header>

let mapStateToProps = (state) => 
    ({
        menuOpen: state.menuOpen,
    })

let mapDispatchToProps = (dispatch) =>
    ({
        updateMenuOpen: (click) => () => dispatch(updateMenuOpen(click)),
    })

let Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderDumb);



export default Header;
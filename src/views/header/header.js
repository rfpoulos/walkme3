import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import hamburger from '../../images/bars-solid.svg';
import Logo from '../../components/logo/logo'
import { updateMenuOpen } from '../../redux/actions';
import { isSignedIn } from './helpers';

let HeaderDumb = ({ updateMenuOpen, menuOpen, userObject }) =>
    <header className="header">
        <img className={ 'hamburger ' + isSignedIn(userObject).toString() } 
            src={ hamburger } 
            onClick={ updateMenuOpen(!menuOpen) } 
            alt="Menu"/>
        <a className={ 'sign-in ' + (isSignedIn(!userObject)).toString() }
            href="/signin">SIGN IN</a>
        <Logo />
    </header>

let mapStateToProps = (state) => 
    ({
        menuOpen: state.menuOpen,
        userObject: state.userObject,
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
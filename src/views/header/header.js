import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Logo from '../../components/logo/logo'
import { updateMenuOpen } from '../../redux/actions';
import { isSignedIn } from './helpers';
import UserIcon from '../../components/user-icon/user-icon';
import { server } from '../../variables';

let HeaderDumb = ({ updateMenuOpen, menuOpen, userObject }) =>
    <header className="header">
        <UserIcon className={ isSignedIn(userObject).toString() } 
            src={ server + userObject.thumbnail } 
            onClick={ updateMenuOpen(!menuOpen) } 
            alt="Open menu / user image"/>
        <a className={ 'sign-in-text ' + (isSignedIn(!userObject)).toString() }
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
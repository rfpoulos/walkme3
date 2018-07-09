import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Logo from '../../components/logo/logo'
import { updateMenuOpen } from '../../redux/actions';
import UserIcon from '../../components/user-icon/user-icon';
import { server } from '../../variables';

let HeaderDumb = ({ updateMenuOpen, menuOpen, userObject }) =>
    <header className="header">
        <div className="flex2">
        {
            isSignedIn(userObject, menuOpen, updateMenuOpen)
        }
        </div>
        <Logo />
        <div className="flex2"></div>
    </header>

let isSignedIn = (userObject, menuOpen, updateMenuOpen) => {
    if (userObject) {
        return <UserIcon 
            src={ server + userObject.thumbnail } 
            onClick={ updateMenuOpen(!menuOpen) } 
            alt="Open menu / user image"/>
    } else {
        return <a 
            className="sign-in-text"
            href="/signin">SIGN IN</a>
    }
}

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
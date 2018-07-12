import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Logo from '../../components/logo/logo'
import { updateMenuOpen } from '../../redux/actions';
import UserIcon from '../../components/user-icon/user-icon';
import { server } from '../../variables';

export let Header = ({ updateMenuOpen, menuOpen, userObject }) =>
    <header className="header">
        <div className="flex2">
        {
            userObject && <UserIcon 
                src={ server + userObject.thumbnail } 
                onClick={ updateMenuOpen(!menuOpen) } 
                alt="Open menu / user image"/>
        }
        {
            !userObject && <a 
                className="sign-in-text"
                href="/signin">SIGN IN</a>
        }
        </div>
        <Logo />
        <div className="flex2"></div>
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

let connect = connect(
    mapStateToProps,
    mapDispatchToProps
);


export default connect(Header);
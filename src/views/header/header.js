import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Logo from '../../components/logo/logo'
import UserIcon from '../../components/user-icon/user-icon';
import { server } from '../../variables';
import { 
    withState,
    withHandlers,
    compose,
} from 'recompose';
import Menu from '../../components/menu/menu';

export let Header = ({ 
    updateMenuOpen, 
    menuOpen, 
    userObject,
    handleToggle,
}) =>
    <div>
        <header className="header">
            {
                userObject && 
                <UserIcon 
                    src={ server + userObject.thumbnail } 
                    onClick={ handleToggle } 
                    alt="Open menu / user image"
                />
            }
            <Logo />
            {
                userObject && 
                <div className="padding"></div>
            }
        </header>
        {
            menuOpen && <Menu isOnline={ true } />
        }
    </div>

let mapStateToProps = (state) => 
    ({
        userObject: state.userObject,
    });

let mapDispatchToProps = (dispatch) =>
    ({

    });

export let enhance = compose(
    withState('menuOpen', 'menuToggle', false),
    withHandlers({
        handleToggle: ({ menuOpen, menuToggle }) =>
            () => menuToggle(!menuOpen)
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
);


export default enhance(Header);
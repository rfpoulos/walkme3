import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    route,
    logout,
} from './menu-helpers';
import {
    compose,
    withState,
    withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { resetState } from '../../redux/actions';
import UserIcon from '../../components/user-icon/user-icon';
import { server } from '../../variables';
import {
    container,
    nav,
    li,
} from './menu-style';

export let Menu = ({ 
    history,
    resetState,
    handleToggle,
    userObject,
    menuOpen,
}) =>
    userObject && 
    <nav onClick={ handleToggle } style={ container }>
        <UserIcon 
            src={ server + userObject.thumbnail } 
            onClick={ handleToggle } 
            alt="Open menu / user image"
        />
        {
            menuOpen && userObject &&
            <ul style={ nav }>
                <li style={ li }
                    onClick={ route(history, 'walks') }>
                    Find Walk
                </li>
                <li style={ li }
                    onClick={ route(history,'addwalk') }>
                    Add/Edit Walks
                </li>
                <li style={ li }
                    onClick={ route(history, 'offlinewalks') }>
                    Offline Walks
                </li>
                <li style={ li }
                    onClick={ route(history, 'profile') }>
                    Profile
                </li>
                <li style={ li }
                    onClick={ logout(history, resetState) }>
                    Logout
                </li>
            </ul>
        }
    </nav>

let mapStateToProps = (state) => 
    ({
        userObject: state.userObject,
        isOnline: state.isOnline,
    });

let mapDispatchToProps = (dispatch) =>
    ({
        resetState: () => dispatch(resetState()),
    });

export let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withState('menuOpen', 'menuToggle', false),
    withHandlers({
        handleToggle: ({ menuOpen, menuToggle }) =>
            () => menuToggle(!menuOpen)
    }),
    withRouter,
);

export default enhance(Menu);
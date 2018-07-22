import React from 'react';
import './style.css';
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

export let Menu = ({ 
    isOnline, 
    history,
    resetState,
    handleToggle,
    userObject,
    menuOpen,
}) =>
    <nav onClick={ handleToggle } className="menu">
        {
            userObject && <UserIcon 
                src={ server + userObject.thumbnail } 
                onClick={ handleToggle } 
                alt="Open menu / user image"
            />
        }
        {
            isOnline && userObject && menuOpen &&
            <ul className="nav-list">
                <li onClick={ route(history, 'walks') }>
                    Find Walk
                </li>
                <li onClick={ route(history,'addwalk') }>
                    Add Walk
                </li>
                <li onClick={ route(history, 'mywalks') }>
                    My Walks
                </li>
                <li onClick={ route(history, 'offlinewalks') }>
                    Offline Walks
                </li>
                <li onClick={ route(history, 'profile') }>
                    Profile
                </li>
                <li onClick={ logout(history, resetState) }>
                    Logout
                </li>
            </ul>
        }{
            !isOnline &&
            <ul className="nav-list">
                <li>
                    Offline Walks
                </li>
                <li>
                    Profile
                </li>
                <li>
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
import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import { 
    route,
    logout,
} from './menu-helpers';
import {
    compose,
} from 'recompose';
import { connect } from 'react-redux';
import { resetState } from '../../redux/actions';

export let Menu = ({ 
    isOnline, 
    history,
    resetState,
}) =>
    <nav>
        {
            isOnline && 
            <ul>
                <li onClick={ route(history, 'walks') }>
                    Find Walk
                </li>
                <li onClick={ route(history,'addwalk') }>
                    Add Walk
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
            <ul>
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
    isOnline: state.isOnline,
});

let mapDispatchToProps = (dispatch) => 
({
    resetState: () => dispatch(resetState()),
});

export let enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withRouter,
)

export default enhance(Menu);
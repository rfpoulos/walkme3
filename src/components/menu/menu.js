import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import { route } from './menu-helpers';

export default withRouter(({ isOnline, history }) =>
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
                <li>
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
    </nav>)
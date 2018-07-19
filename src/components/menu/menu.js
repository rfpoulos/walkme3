import React from 'react';
import './style.css';

export default ({ isOnline }) =>
    <nav>
        {
            isOnline && 
            <ul>
                <li>
                    Find Walk
                </li>
                <li>
                    Add Walk
                </li>
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
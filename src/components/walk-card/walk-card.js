import React from 'react';
import './style.css';
import { server } from '../../variables';
import UserIcon from '../user-icon/user-icon';

let WalkCard = ({ 
    walk, 
    location, 
}) => 
    <div className="walk-card">
        <div className="walk-img-container">
            <img src={ server + walk.thumbnail }
                className="walk-img"
                alt="Walk Thumbnail"
            />
        </div>
            <ul className="walk-info">
                <li>
                    <h2 className="walk-title">{ walk.title }</h2>
                </li>
                <li className="guide">
                    <h4 className="guide-name">
                        Guided by { walk.username }
                    </h4>
                    <UserIcon alt="Guide's Profile"
                        src={ server + walk.guidethumbnail }
                    />
                </li>
                <li>{ walk.address }</li>
            </ul>
    </div>

export default WalkCard;
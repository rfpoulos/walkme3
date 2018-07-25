import React from 'react';
import './style.css';
import { server } from '../../variables';
import UserIcon from '../user-icon/user-icon';
import StartIcon from '../../images/map-pin-solid.svg';
import LocationArrow from '../../images/location-arrow-solid.svg';
import LengthIcon from '../../images/walking-solid.svg';
import HasVideo from '../../images/video-solid.svg';
import HasAudio from '../../images/microphone-solid.svg';
import Ratings from '../ratings/ratings';

export default ({ 
    walk, 
    location,
    distance,
    onClick,
}) => 
    <div className="walk-card"
        onClick={ onClick }
    >
        <div className="walk-thumbnail-container">
            <img className="walk-thumbnail" 
                src={ server + walk.thumbnail }
                alt="Walk Thumbnail"
                />
        </div>
        <ul className="walk-info">
            <li>
                <h2 className="walk-title">{ walk.title }</h2>            
            </li>
            <li className="icon-container">
                <Ratings averageRating={ parseFloat(walk.ratingavg) }
                    ratingsCount={ parseInt(walk.ratingcount, 10) }
                    />
            </li>
            <li className="icon-container">
                <img src={ StartIcon }
                    className="walk-icon"
                    alt="Start Address"
                />
                <p className="address-text">
                    { walk.address.split(",")[0] + ',' +
                        walk.address.split(",")[1] + ' ' +
                        walk.address.split(",")[2].split(" ")[1]  }
                </p>
            </li>
            <li className="icon-container">
                <img src={ LengthIcon }
                    className="walk-icon"
                    alt="Walk Length"
                />
                <p className="info-text">{ 
                    parseFloat(walk.length).toFixed(2) + "mi" 
                }</p>
            </li>
            <li className="icon-info">
                <div className="icon-info">
                    { 
                        (walk.audio || walk.poisaudio > 0)
                        && <img src={ HasAudio }
                            className="walk-icon"
                            alt="Has Audio"
                            />
                    }
                    {
                        (walk.video || walk.poisvideo > 0) 
                        && <img src={ HasVideo }
                            className="walk-icon"
                            alt="Has Video"
                        />
                    }
                </div>
                <div className="icon-container">
                    <img src={ LocationArrow }
                        className="walk-icon"
                        alt="Distance to"
                    />
                    <p className="info-text">{ walk.distance.toFixed(2) }mi</p>
                </div>
            </li>
        </ul>
    </div>
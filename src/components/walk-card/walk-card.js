import React from 'react';
import './style.css';
import { server } from '../../variables';
import UserIcon from '../user-icon/user-icon';
import StartIcon from '../../images/map-marker-alt-solid.svg';
import LocationArrow from '../../images/location-arrow-solid.svg';
import LengthIcon from '../../images/walking-solid.svg';
import HasVideo from '../../images/video-solid.svg';
import HasAudio from '../../images/microphone-solid.svg';
// import Ratings from '../ratings/ratings';

export default ({ 
    walk, 
    location,
    distance,
}) => 
    <div className="walk-card">
        <div className="walk-thumbnail-container">
            <img className="walk-thumbnail" 
                src={ server + walk.thumbnail }
                alt="Walk Thumbnail"
                />
        </div>
        <div className="walk-info-container">
            <h2 className="walk-title">{ walk.title }</h2>
            {/* <Ratings averageRating={ walk.averagerating } */}
                {/* ratingsCount={ walk.ratingscount }
            /> */}
            <ul className="walk-info">
                <li className="icon-container">
                    <img src={ StartIcon }
                        className="icon"
                        alt="Start Address"
                    />
                    <p className="info-text">
                        { walk.address.split(",")[0] + ',' +
                            walk.address.split(",")[1] + ' ' +
                            walk.address.split(",")[2].split(" ")[1]  }
                    </p>
                </li>
                <li className="icon-container">
                    <img src={ LengthIcon }
                        className="icon"
                        alt="Walk Length"
                    />
                    <p className="info-text">{ walk.length + " mi" }</p>
                </li>
                <li className="icon-info">
                    <div className="icon-info">
                        { 
                            walk.hasAudio && <img src={ HasAudio }
                                className="icon-ifs"
                                alt="Has Audio"
                                />
                        }
                        {
                            walk.hasVideo && <img src={ HasVideo }
                                className="icon-ifs"
                                alt="Has Video"
                            />
                        }
                    </div>
                    <div className="icon-container">
                        <img src={ LocationArrow }
                            className="icon"
                            alt="Distance to"
                        />
                        <p className="info-text">{ distance } mi</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
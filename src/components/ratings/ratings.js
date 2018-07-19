import React from 'react';
import './style.css';
import Star from '../../images/star-solid.svg';

let Ratings = ({ averageRating, ratingsCount }) =>
    <div>
        <div className="star-hover-container"
            onMouseOver={}>
            <div className="percent-reveal-container">
                <img src={ Star }
                    alt="full star"
                    className="star"
                />
            </div>
        </div>
    </div>

export default Ratings;
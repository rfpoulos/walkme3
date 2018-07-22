import React from 'react';
import './style.css';
import Star from '../../images/star-solid.svg';
import StarHollow from '../../images/star-regular.svg';

export default ({ averageRating, ratingsCount }) =>
    <div className="ratings-container">
        <div className="ratings-container">
            <div style={{ width: `${averageRating}em`, height: '1em', overflow: 'hidden' }}>
                <img className="star" 
                    src={ Star}
                    alt="1"
                />
                <img className="star"  
                    src={ Star}
                    alt="2"
                />
                <img className="star"  
                    src={ Star}
                    alt="3"
                />
                <img className="star"  
                    src={ Star}
                    alt="4"
                />
                <img className="star"  
                    src={ Star}
                    alt="5"
                />
            </div>
            <p className="count"></p>
        </div>            
        <div className="hollow-container">
            <img className="star" 
                src={ StarHollow }
                alt="1"
            />
            <img className="star"  
                src={ StarHollow }
                alt="2"
            />
            <img className="star"  
                src={ StarHollow }
                alt="3"
            />
            <img className="star"  
                src={ StarHollow }
                alt="4"
            />
            <img className="star"  
                src={ StarHollow }
                alt="5"
            />
            <p className="count">{`(${ratingsCount})`}</p>  
        </div>
    </div>
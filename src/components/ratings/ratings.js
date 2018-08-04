import React from 'react';
import {
    ratingsContainer,
    starContainer,
    hollowContainer,
    count,
    ratingWidth,
} from './ratings-style';
import Icon from '../svg-icon/small/small';
import Star from '../../images/star-solid.svg';
import StarHollow from '../../images/star-regular.svg';

export default ({ 
    averageRating, 
    ratingsCount, 
}) =>
    <div style={ ratingsContainer }>
        <div style={ ratingsContainer }>
            <div style={ ratingWidth(averageRating) }>
                <div style={ starContainer }>
                    <Icon src={ Star}
                        alt="1"
                    />
                    <Icon src={ Star}
                        alt="2"
                    />
                    <Icon src={ Star}
                        alt="3"
                    />
                    <Icon src={ Star}
                        alt="4"
                    />
                    <Icon src={ Star}
                        alt="5"
                    />
                </div>
            </div>
            <p style={ count }></p>
        </div>            
        <div style={ hollowContainer }>
            <Icon src={ StarHollow }
                alt="1"
            />
            <Icon src={ StarHollow }
                alt="2"
            />
            <Icon src={ StarHollow }
                alt="3"
            />
            <Icon src={ StarHollow }
                alt="4"
            />
            <Icon src={ StarHollow }
                alt="5"
            />
            <p style={ count }>{`(${ratingsCount})`}</p>  
        </div>
    </div>
import React from 'react';
import { server } from '../../variables';
import StartIcon from '../../images/map-pin-solid.svg';
import LocationArrow from '../../images/location-arrow-solid.svg';
import LengthIcon from '../../images/walking-solid.svg';
import HasVideo from '../../images/video-solid.svg';
import HasAudio from '../../images/microphone-solid.svg';
import Ratings from '../../components/ratings/ratings';
import Icon from '../../components/svg-icon/small/small';
import Thumbnail from '../../components/iterables/thumbnail/thumbnail';
import Title from '../../components/iterables/title/title';
import IconText from '../../components/iterables/icon-text/icon-text';
import IconTextSmall from '../../components/iterables/icon-text-small/icon-text-small';
import {
    walkCard,
    walkInfo,
    iconInfo,
} from './walk-card-style';

export default ({ 
    walk, 
    location,
    distance,
    onClick,
}) => 
    <div style={ walkCard }
        onClick={ onClick }
    >
        <Thumbnail src={ server + walk.thumbnail }
                alt="Walk Thumbnail"
        />
        <div style={ walkInfo }>
            <Title text={ walk.title } />
            <Ratings averageRating={ parseFloat(walk.ratingavg) }
                ratingsCount={ parseInt(walk.ratingcount, 10) }
            />
            <IconTextSmall src={ StartIcon }
                alt="Start Address"
                text={ walk.address.split(",")[0] + ',' +
                    walk.address.split(",")[1] + ' ' +
                    walk.address.split(",")[2].split(" ")[1]  }
            />
            <IconText src={ LengthIcon }
                alt="Walk Length"
                text={ parseFloat(walk.length).toFixed(2) + "mi" }
            />
            <div style={ iconInfo }>
                <div style={ iconInfo }>
                    { 
                        (walk.audio || walk.poisaudio > 0)
                        && <Icon src={ HasAudio }
                            alt="Has Audio"
                            />
                    }
                    {
                        (walk.video || walk.poisvideo > 0) 
                        && <Icon src={ HasVideo }
                            alt="Has Video"
                        />
                    }
                </div>
                {   walk.distance &&
                    <IconText src={ LocationArrow }
                        alt="Distance to"
                        text={ walk.distance.toFixed(2) + 'mi' }
                    />
                }
            </div>
        </div>
    </div>
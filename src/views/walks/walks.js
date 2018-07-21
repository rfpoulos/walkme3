import React from 'react';
import './style.css';
import WalkCard from '../../components/walk-card/walk-card';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';
import {
    compose,
    withState,
    withHandlers,
} from 'recompose';

let Walks = () =>
    <div className="walks">
        <TextInput placeholder="Street address, city, state" />
        <ul>
            <li>Use my current location</li>
        </ul>
        <TextInput placeholder="Search by title or guide" />
        <ul>
        </ul>
        <div class="sort-options">
            <div className="options-container">
                <p>Radius:</p>
                <select name="miles">
                    <option value="1">1 mi</option>
                    <option value="5">5 mi</option>
                    <option value="10">10 mi</option>
                    <option value="25">25 mi</option>
                    <option value="all">All</option>
                </select>
            </div>
            <div class="options-container">
                <p>Sort by:</p>
                <select name="sortby">
                    <option value="rating">Rating</option>
                    <option value="distance">Distance To</option>
                    <option value="length">Length</option>
                </select>
            </div>
        </div>
        <Button text="Find Walks!" />
    </div>

export default Walks;
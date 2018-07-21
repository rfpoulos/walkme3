import React from 'react';
import './style.css';
import { 
    compose, 
    withProps, 
    withState,
    withHandlers,
} from 'recompose';
import {
  withScriptjs,
} from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';
import { googleKey } from '../../variables';

export let Walks = ({
    onSearchBoxMounted,
    bounds,
    onPlacesChanged,
    places,
    searchForm,
}) =>
<div className="location-search">
    <StandaloneSearchBox
        ref={ onSearchBoxMounted }
        bounds={ bounds }
        onPlacesChanged={ onPlacesChanged }
    >
        <TextInput 
            placeholder="Street address, city, state"
        />
    </StandaloneSearchBox>
    <TextInput placeholder="Search by title or guide" />
    <ul className="title-guide-results">
    </ul>
    <div className="sort-options">
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
        <div className="options-container">
            <p>Sort by:</p>
            <select name="sortby">
                <option value="rating">Rating</option>
                <option value="distance">Distance To</option>
                <option value="length">Length</option>
            </select>
        </div>
    </div>
</div>
 

export let enhance = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?
            key=${ googleKey }
            &v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
    }),
    withState('refs', 'updateRefs', {}),
    withState('places', 'updatePlaces', []),
    withState('searchForm', 'updateSearch', {
        lat: null,
        lng: null,
        range: 25,
        sortBy: 'ratings',
        miles: 1,
    }),
    withHandlers({
        onSearchBoxMounted: ({ refs, updateRefs }) =>
            searchBox => updateRefs({ ...refs, searchBox }),
        onPlacesChanged: ({ 
                refs, 
                updatePlaces, 
                updateSearch,
                searchForm,
                places, 
            }) => () => {
                updatePlaces(refs.searchBox.getPlaces())
                updateSearch({ 
                    ...searchForm,
                    lat: refs.searchBox.getPlaces()[0].geometry.location.lat(),
                    lng: refs.searchBox.getPlaces()[0].geometry.location.lng(),
                })
            },
    }),
    withScriptjs  
);

export default enhance(Walks)
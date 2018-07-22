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
import { getWalks } from './walks-helpers';
import WalkCard from '../../components/walk-card/walk-card';
import { connect } from 'react-redux';
import MapMarker from '../../images/map-marker-alt-solid.svg';

export let Walks = ({
    onSearchBoxMounted,
    bounds,
    onPlacesChanged,
    places,
    searchForm,
    results,
    walkResults,
    distanceChange,
    userLocation,
    sortChange,
    searchCurrentLocation,
    currentLocation,
    searchText,
    handleText,
}) =>
<div className="location-search">
    <StandaloneSearchBox
        ref={ onSearchBoxMounted }
        bounds={ bounds }
        onPlacesChanged={ onPlacesChanged }
    >
        <div className="search-container">
            <TextInput value={ searchText }
                onChange={ handleText }
                placeholder="Street address, city, state"
                style={{ 'padding-left': '2rem' }}
            />
            <img src={ MapMarker }
                className="current-location"
                alt="Use current location"
                onClick={ searchCurrentLocation }
            />
        </div>
    </StandaloneSearchBox>
    <TextInput placeholder="Search by title or guide" />
    <ul className="title-guide-results">
    </ul>
    <div className="sort-options">
        <div className="options-container">
            <p className="options-title">Within:</p>
            <select className="options"
                onChange={ distanceChange } 
                value={ searchForm.miles }
            >
                <option value="1">1 mi</option>
                <option value="5">5 mi</option>
                <option value="10">10 mi</option>
                <option value="25">25 mi</option>
                <option value="all">All</option>
            </select>
        </div>
        <div className="options-container">
            <p className="options-title">Sort by:</p>
            <select className="options"
                onChange={ sortChange }
                value={ searchForm.sortBy }
            >
                <option value="rating DESC">Rating</option>
                <option value="distance" >Distance</option>
                <option value="length">Length</option>
            </select>
        </div>
    </div>
    {
        walkResults.map(walk =>
            <WalkCard key={ walk.id }walk={ walk } />
        )
    }
</div>

let mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
});

export let enhance = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?
            key=${ googleKey }
            &v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
    }),
    connect(
        mapStateToProps,
    ),
    withState('refs', 'updateRefs', {}),
    withState('places', 'updatePlaces', []),
    withState('searchText', 'updateText', ''),
    withState('searchForm', 'updateSearch', {
        lat: null,
        lng: null,
        limit: 25,
        sortBy: 'distance',
        miles: 5,
    }),
    withState('walkResults', 'updateWalkResults', []),
    withHandlers({
        onSearchBoxMounted: ({ refs, updateRefs }) =>
            searchBox => updateRefs({ ...refs, searchBox }),
        onPlacesChanged: ({ 
                refs, 
                updatePlaces, 
                updateSearch,
                searchForm,
                places,
                updateWalkResults, 
            }) => async () => {
                updatePlaces(refs.searchBox.getPlaces());
                let newSearch = { 
                    ...searchForm,
                    lat: refs.searchBox.getPlaces()[0].geometry.location.lat(),
                    lng: refs.searchBox.getPlaces()[0].geometry.location.lng(),
                    limit: 25,
                };
                updateSearch(newSearch);
                let results = await getWalks(newSearch);
                updateWalkResults(results);
            },
        distanceChange: ({ 
                searchForm, 
                updateSearch,
                updateWalkResults,
            }) => async event => {
                let newSearch = {
                    ...searchForm,
                    miles: event.target.value
                };
                updateSearch(newSearch);
                if (newSearch.lat) {
                    let results = await getWalks(newSearch);
                    updateWalkResults(results);
                }
            },
        sortChange: ({ 
                searchForm, 
                updateSearch,
                updateWalkResults,
        }) => async event => {
                let newSearch = {
                    ...searchForm,
                    sortBy: event.target.value
                };
                updateSearch(newSearch);
                if (newSearch.lat) {
                    let results = await getWalks(newSearch);
                    updateWalkResults(results);
                }
        },
        searchCurrentLocation: ({ 
                searchForm, 
                updateSearch,
                updateWalkResults,
                currentLocation,
                updateText,
        }) => async event => {
                if (currentLocation) {
                    let newSearch = {
                        ...searchForm,
                        lat: currentLocation.lat,
                        lng: currentLocation.lng
                    };
                    updateSearch(newSearch);
                    updateText("Current Location");
                    let results = await getWalks(newSearch);
                    updateWalkResults(results);
                }
        },
        handleText: ({ updateText }) =>
            event => updateText(event.target.value)
    }),
    withScriptjs  
);

export default enhance(Walks)
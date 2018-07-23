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
    <h2 className="page-title">Find Walking Tours</h2>
    <StandaloneSearchBox
        ref={ onSearchBoxMounted }
        bounds={ bounds }
        onPlacesChanged={ onPlacesChanged }
    >
        <div className="search-container">
            <TextInput value={ searchText }
                onChange={ handleText }
                placeholder="Street address, city, state"
                style={{ paddingLeft: '2rem' }}
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
    <div className="filter-by">
        <p>Filter By: </p>
        <input type="checkbox" id="video" value="checked" 
            onChange={(event) => event}/>
        <label htmlFor="video">Video</label>
        <input type="checkbox" id="audio" value="Has Audio"/>
        <label htmlFor="audio">Audio</label>
    </div>
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
            <div className="walk-card-container">
                <WalkCard key={ walk.id }walk={ walk } />
            </div>
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
        sortBy: 'rating DESC',
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
                updateText 
            }) => async () => {
                let newPlace = refs.searchBox.getPlaces();
                updatePlaces(newPlace);
                let newSearch = { 
                    ...searchForm,
                    lat: newPlace[0].geometry.location.lat(),
                    lng: newPlace[0].geometry.location.lng(),
                    limit: 25,
                };
                updateText(newPlace[0].formatted_address)
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
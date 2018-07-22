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
    {
        currentLocation &&
        <Button text="Use My Location"
            onClick={ searchCurrentLocation }
        />
    }
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
        }) => async event => {
                let newSearch = {
                    ...searchForm,
                    lat: currentLocation.lat,
                    lng: currentLocation.lng
                };
                updateSearch(newSearch);
                let results = await getWalks(newSearch);
                updateWalkResults(results);
        },
    }),
    withScriptjs  
);

export default enhance(Walks)
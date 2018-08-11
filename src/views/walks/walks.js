import React from 'react';
import { 
    compose, 
    withProps, 
    withState,
    withHandlers,
    mapPropsStream,
    setObservableConfig,
} from 'recompose';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { googleKey } from '../../variables';
import { 
    getWalks,
    getTitleOrGuide,
    getResultClick,
} from './walks-helpers';
import WalkCard from '../../collections/walk-card/walk-card';
import { connect } from 'react-redux';
import MapMarker from '../../images/map-marker-alt-solid.svg';
import IconLeftInput from '../../components/text-input/icon-left';
import DistanceIcon from '../../images/location-arrow-solid.svg';
import SortIcon from '../../images/sort-solid.svg';
import DropDown from '../../components/drop-down/drop-down';
import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/page-title/page-title';
import Autocomplete from '../../collections/autocomplete/autocomplete';
import FilterOptions from '../../components/filter-options/filter-options';
import { route } from '../menu/menu-helpers';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { 
    container,
    input,
    sort,
    walkContainer,
} from './walks-style';
import rxjsconfig from 'recompose/rxjsObservableConfig';
setObservableConfig(rxjsconfig)

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
    history,
    toggleVideo,
    toggleAudio,
    titleGuideSearch, 
    titleGuideResults, 
    titleGuideQuery,
    titleGuideClick,
    resultOnClick,
}) =>
<div style={ container }>
    <PageTitle text='Find Walking Tours' />
    <div style={ input }>
        <StandaloneSearchBox
            ref={ onSearchBoxMounted }
            bounds={ bounds }
            onPlacesChanged={ onPlacesChanged }
        >
            <IconLeftInput 
                src={ MapMarker }
                value={ searchText }
                onChange={ handleText }
                placeholder="Street address, city, state"
                alt="Use current location"
                onClick={ searchCurrentLocation }
            />
        </StandaloneSearchBox>
    </div>
    <div style={ input }>
        <Autocomplete results={ titleGuideResults }
            onChange={ (event) => 
                titleGuideSearch(event.target.value) }
            value={ titleGuideQuery }
            placeholder="Search by title or guide"
            resultOnClick={ resultOnClick }
        />
    </div>
    <div style={ input }>
        <FilterOptions 
            name='Must Have'
            options={[
                { value: 'Video', onChange: toggleVideo },
                { value: 'Audio', onChange: toggleAudio }
            ]}
        />
    </div>
    <div style={ sort }>
        <DropDown iconSvg={ DistanceIcon }
            alt="Distance to"
            onChange={ distanceChange }
            value={ searchForm.miles }
            options={[
                { value: '1', text: '1 mi'},
                { value: '5', text: '5 mi'},
                { value: '10', text: '10 mi'},
                { value: '25', text: '25 mi'},
                { value: 'all', text: 'All'}
            ]}
        />
        <DropDown iconSvg={ SortIcon }
            alt="sort"
            onChange={ sortChange }
            value={ searchForm.sortBy }
            options={[
                { value: 'ratingavg DESC', text: 'Rating'},
                { value: 'distance', text: 'Distance'},
                { value: 'length', text: 'Length'}
            ]}
        />
    </div>
    {
        walkResults.map(walk =>
        <div style={ walkContainer }
            key={ walk.walkid }
        >
            <WalkCard walk={ walk } 
                onClick={ route(history, `walks/${walk.walkid}`) }
            />
        </div>
        )
    }
</div>

let mapStateToProps = (state) => ({
    currentLocation: state.currentLocation,
});

let mapDispatchToProps = (dispatch) => ({

});

export let enhance = compose(
    mapPropsStream(props$ => {
        let titleGuideSearch$ = new Subject();
        let titleGuideSearch = v => titleGuideSearch$.next(v);
    
        let titleGuideQuery$ =  titleGuideSearch$
            .startWith('');
    
        let titleGuideResults$ = titleGuideQuery$
            .debounceTime(250)
            .distinctUntilChanged()
            .switchMap(query => query ? 
                getTitleOrGuide(query) : 
                Promise.resolve([])
            )
            .map(results => results.map(result => result.result));
    
    
        return props$.combineLatest(
            titleGuideResults$, 
            titleGuideQuery$,
            (   props, 
                titleGuideResults, 
                titleGuideQuery
            ) => ({
                ...props, 
                titleGuideSearch, 
                titleGuideResults, 
                titleGuideQuery,
          })
        )}
      ),
    withRouter,
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' +
            googleKey + '&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withState('refs', 'updateRefs', {}),
    withState('places', 'updatePlaces', []),
    withState('searchText', 'updateText', ''),
    withState('searchForm', 'updateSearch', {
        lat: null,
        lng: null,
        limit: 25,
        sortBy: 'ratingavg DESC',
        miles: 5,
        audio: false,
        video: false,
    }),
    withState('walkResults', 'updateWalkResults', []),
    withHandlers({
        onSearchBoxMounted: ({ 
            refs, 
            updateRefs 
        }) => searchBox => 
            updateRefs({ ...refs, searchBox }),
        onPlacesChanged: ({ 
            refs, 
            updatePlaces, 
            updateSearch,
            searchForm,
            places,
            updateWalkResults,
            updateText, 
        }) => async () => {
            let newPlace = refs.searchBox.getPlaces();
            updatePlaces(newPlace);
            let newSearch = { 
                ...searchForm,
                lat: newPlace[0].geometry.location.lat(),
                lng: newPlace[0].geometry.location.lng(),
                limit: 25,
            };
            updateText(newPlace[0].formatted_address);
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
        ,
        toggleVideo: ({ 
            searchForm,
            updateSearch,
            updateWalkResults,
        }) => async (event) => {
            let newSearch = {
                ...searchForm,
                video: event.target.checked,
            }
            updateSearch(newSearch);
            let results = await getWalks(newSearch);
            updateWalkResults(results);
        },
        toggleAudio: ({ 
            searchForm,
            updateSearch,
            updateWalkResults,
        }) => async (event) => {
            let newSearch = {
                ...searchForm,
                audio: event.target.checked,
            }
            updateSearch(newSearch);
            let results = await getWalks(newSearch);
            updateWalkResults(results);
        },
        resultOnClick: ({
            updateWalkResults,
            searchForm,
            titleGuideSearch,
        }) => (result) => async () => {
            let search = {
                lat: searchForm.lat,
                lng: searchForm.lng,
                query: result
            }
            let results = await getResultClick(search);
            updateWalkResults(results);
            titleGuideSearch('')
        }
    }),
    withScriptjs  
);

export default enhance(Walks)
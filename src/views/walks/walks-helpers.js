import { 
    server, 
    googleKey, 
} from '../../variables';
const googleMapsClient = require('@google/maps').createClient({
    key: googleKey,
    Promise: Promise
  });

export let getWalks = ({ 
    lat, 
    lng, 
    miles, 
    limit, 
    sortBy,
    audio,
    video,
}) =>
    fetch(server +
        'getresultswithindistance/' +
        lat + '/' +
        lng + '/' +
        miles + '/' +
        limit + '/' +
        sortBy + '/' +
        audio + '/' +
        video, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers ({
                "Content-Type": "application/json",
                "authorization": localStorage.getItem('token')
            })
    }).then(res => res.json())

export let getTitleOrGuide = (query) =>
    fetch(server +
        'getguideortitle/' +
        query, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers ({
                "Content-Type": "application/json",
                "authorization": localStorage.getItem('token')
            })
    }).then(res => res.json())

export let getTitleGuideClick = ({
    query,
    lat,
    lng,
}) =>
    fetch(server +
        'getresultclick/' +
        query + '/' +
        lat + '/' +
        lng, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers ({
                "Content-Type": "application/json",
                "authorization": localStorage.getItem('token')
            })
    }).then(res => res.json())

export let googlePlacesAutocomplete = (query) =>
    googleMapsClient.placesQueryAutoComplete({
        input: query,
    }).asPromise()
    .then(results => results.json.predictions)

export let googlePlacesDetail = (placeId) =>
    googleMapsClient.place({
        placeid: placeId,
        fields: ['geometry'],
    }).asPromise()
    .then(results => results.json.result.geometry.location)


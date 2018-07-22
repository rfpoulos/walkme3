import { server } from '../../variables';

export let getWalks = ({ 
    lat, 
    lng, 
    miles, 
    limit, 
    sortBy, 
}) =>
    fetch(server +
        'getresultswithindistance/' +
        lat + '/' +
        lng + '/' +
        miles + '/' +
        limit + '/' +
        sortBy, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers ({
                "Content-Type": "application/json",
                "authorization": localStorage.getItem('token')
            })
    }).then(res => res.json())
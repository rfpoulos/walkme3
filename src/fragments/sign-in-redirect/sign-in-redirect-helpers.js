import { server } from '../../variables';

export let fetchUserObject = () =>
    fetch(server + 'user', {
        method: "GET",
        headers: new Headers ({
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('token') 
            })
        })
        .then(res => res.json());
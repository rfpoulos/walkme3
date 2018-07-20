import React from 'react';
import './style.css';
import WalkCard from '../../components/walk-card/walk-card';

let walk = ({
    "id": 119,
    "thumbnail": "uploads/walk-thumbnail/bb092f9dcccca2766c3b6a3dbc55d654",
    "description": "This is a really cool walk.",
    "length": "782",
    "public": true,
    "title": "The Best Pizza in Atlanta Tour",
    "address": "3330 Piedmont Rd NE, Atlanta, GA 30305, USA",
    "username": "newUser1631",
    "guidethumbnail": "uploads/profile-pics/0cfda3bb1d35e0faa6730eb8cc5e06ba",
    "lat": "33.8454419",
    "long": "-84.37447370000001",
    "video": "uploads/walk-video/3c80591a63036d428fa337fc3bc67f30",
    "audio": "uploads/walk-audio/07f66bac79cbcea13b38550ad62db6aa",
    "averagerating": 3.2,
    "ratingscount": 78,
})

let Walks = () =>
    <div className="walks">
        <WalkCard walk={ walk } distance={ 10.23 } />
    </div>

export default Walks;
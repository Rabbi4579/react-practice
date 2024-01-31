import React, { useEffect, useState } from 'react';
import './Photos.css'
import Photo from '../Photo/Photo';
const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    },[])
    return (
        <div >
            <h2>Photos section: {photos.length}</h2>
            <div className='Photos-container'>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
            </div>
        </div>
    );
};

export default Photos;
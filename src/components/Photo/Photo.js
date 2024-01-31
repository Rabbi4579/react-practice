import React from 'react';
import './Photo.css'
const Photo = (props) => {
   console.log(props.photo.url)
    return (
        <div>
            <h2>Title: {props.photo.albumId}</h2>
            <h3>Id: {props.photo.id}</h3>
            <img src={props.photo.thumbnailUrl} alt="" />
        </div>
    );
};

export default Photo;
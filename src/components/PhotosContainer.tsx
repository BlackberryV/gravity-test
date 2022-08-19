import React from 'react';
import Photo from "./Photo";

const PhotosContainer = () => {
    return (
        <div className={"container"}>
            {new Array(3).fill(0).map((el, index) => <Photo key={index}/>)}
        </div>
    );
};

export default PhotosContainer;

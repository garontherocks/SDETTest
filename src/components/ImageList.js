import React, { useState } from 'react';
import { useFecthImages } from '../hooks/useFecthImages';
import { ImageCard } from './ImageCard';
import  './ImageList.css';

export const ImageList = () => {

    const intialState = { radioSection: 'hot', showViral: 'false'}
    const [section, setSection] = useState(intialState);

    const {data:images, loading} = useFecthImages( 1000 );

    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-columns d-flex justify-content-center">               
            {
                images.map( image => (
                    <ImageCard 
                        key={ image.id }
                        { ...image }
                    />

                ))
            } 
            </div>

        </>
           
    )
}

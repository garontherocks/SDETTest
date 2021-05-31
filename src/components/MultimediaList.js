import React from 'react'

    export const MultimediaList = ( { type, link, description } ) => {
    return (
        <>
            {
                (type.includes("image") )
                    && <img style={{"margin-bottom": "3%"}} src={link} alt={description} className="card-img"/>        
            }
            <p>{description}</p>          
        </>
    )

}

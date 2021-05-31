import React from 'react';
import { Link } from 'react-router-dom';
import {PropTypes} from "prop-types";

export const ImageCard = ( {title, urlPresentation, url, earth_date, sol, full_name, description } ) => {
    return (
        <div className="card animate__animated animate__fadeIn" style={ { maxWidth: 500, maxHeight: 500 } }>
            <div className="row no-gutters">
                <div className="col-md-12">
                    <img src={urlPresentation} alt={title} className="card-img" width="250" height="250"/>
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { title.length > 30 ? title.substring(0,27) + '...' : title } </h5>
                        
                        <Link to={{
                            pathname: `./details` ,
                            state: {
                                urlValue: url, titleValue: title, earth_date: earth_date, sol: sol, full_name: full_name, description: description
                            }
                            }}>Details
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    urlPresentation: PropTypes.string.isRequired,
    earth_date: PropTypes.any.isRequired,
    sol: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired
}

import { useState, useEffect } from 'react'
import { getImages } from '../data/getImages';


export const useFecthImages = ( thousandSol ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getImages( thousandSol )
            .then( imgs => { 
                setstate( {
                    data: imgs,
                    loading: false
                })
            })
    }, [thousandSol])


    return state; // {data: [], loading: true}
}
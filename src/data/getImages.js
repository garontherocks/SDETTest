//This variable saves the ApiKey for later uses.
const apiKey = 'cd3h9Nkwuamae3f5U29TgrPb9C0X0JXELZCDvqtf'

//This function exports photos metadata from NASA API and calls a hook to filter data corresponding to 1000 Sol and its equivalent Earth date. 
export const getImages = async (thousandSol) => {

    const urlMarsSol = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${ thousandSol }&api_key=${ apiKey }`;

    const photosMarte = await obtainJson(urlMarsSol); 
    const earthDate = photosMarte[0].earth_date;
    
    const urlEarth = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${ earthDate }&api_key=${ apiKey }`;
    const photosEarth = await obtainJson(urlEarth);
    const finalPhotos = await comparePhotos(photosEarth, photosMarte)
   

    return finalPhotos;
}

//This fuction obtains values for id, title, url and others from rover's photos API.
const obtainJson = async (url) => {
    const resp = await fetch( url );
    let {  photos  } = await resp.json();

    const imagenes = photos.slice(0, 10).map((img) => {
      
        return{
            id: img.id,
            title: img.rover.name,
            url: img.img_src,
            earth_date: img.earth_date,
            urlPresentation: img.img_src,
            sol: img.sol,
            full_name: img.camera.full_name,
            description: "Description: " + img.id
        }
    })
    return imagenes;
}

//This fuction obtains values for sol, earth_date and total_photos from rover's manifest API.
const obtainFullJson = async (url) => {
    const resp = await fetch( url );
    let  {photo_manifest}   = await resp.json();
    const imagenes = photo_manifest.photos.map((img) => {
      
        return{
            sol: img.sol,
            earth_date: img.earth_date,
            total_photos: img.total_photos,
        }
    })
    return imagenes;
}

//This function alternates photos from an array to compare pictures taken by Curiosity's 1000 Mars sol and on Earth date equal to 1000 Mars sol.
const comparePhotos = async (earthDays, marsSol) => {
    
    let combined = [];
    for (let i = 0; i < earthDays.length; i++) {
        combined.push(marsSol[i]);
        combined.push(earthDays[i]);
    }

    return combined;
}


//Obtains date equal to Curiosity's 1000 Mars sol from NASA manifests API and converts it to Earth days for Spirit and Oportunity rovers.
const convertCuriosity1000SolToEarthDays = async () => {

    const urlCuriosity = `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=${ apiKey }`;
    const urlSpirit = `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=${ apiKey }`;
    const urlOpportunity = `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=${ apiKey }`;

    //Begins obtaining data from Curiosity rover from its Json and returns Earth Date equal to 1000 Mars sol from that same rover.

    const curiosity = await obtainFullJson(urlCuriosity);

    const dayCuriosity = curiosity.filter(function(item){
        return item.sol == 1000;         
    });

    const earthCuriosity = dayCuriosity[0].earth_date;

    console.log('Photo amount found for Curiosity rover: ' + dayCuriosity[0].total_photos);

    //Begins obtaining data from Spirit rover from its Json and returns photos for the same Curiosity Earth Date if found.

    const spirit = await obtainFullJson(urlSpirit);
    
    const daySpirit = spirit.filter(function(item){
        return item.earth_date == earthCuriosity;         
    });
    
    const earthSpirit = daySpirit.earth_date;

    if(earthCuriosity == earthSpirit){    

        console.log('Photo amount found for Spirit rover: ' + daySpirit.total_photos);
    }
    else {
        console.log('No photos were found for Spirit rover on ' + earthCuriosity);
    };

    //Begins obtaining data from Oportinity rover from its Json and returns photos for the same Curiosity Earth Date if found.

    const oportunitty = await obtainFullJson(urlOpportunity);
    
    const dayOportunitty = oportunitty.filter(function(item){
        return item.earth_date == earthCuriosity;         
    });

    const earthOportunitty = dayOportunitty[0].earth_date
    
    if(earthCuriosity == earthOportunitty){        
        console.log('Photo amount found for Oportunity rover: ' + dayOportunitty[0].total_photos);
    }
    else {
        console.log('No photos were found for Spirit rover on ' + earthCuriosity);
    };
    

    if(daySpirit.total_photos * 10 < dayCuriosity[0].total_photos || dayOportunitty[0].total_photos * 10 < dayCuriosity[0].total_photos  ){
        
        //if Curiosity pictures took on 1000 Mars sol is greater than 10 times the amount of pictures taken by other cameras
        //on the same date, boolean will return false and display an alert.
        alert('Curiosity pictures are at least 10 times greater than other cameras')
        console.log("the amount of pictures that each Curiosity camera took on 1000 Mars sol is greater than 10 times the amount taken by other cameras on the same date")
        return false
    }
    else{
        
        //if Curiosity pictures took on 1000 Mars sol is not greater than 10 times the amount of pictures taken by other cameras
        //on the same date, boolean will return true and display an alert.
        alert('Curiosity pictures are not 10 times greater than other cameras')
        console.log("the amount of pictures that each Curiosity camera took on 1000 Mars sol is not greater than 10 times the amount taken by other cameras on the same date")
        
        return true
    };

}

//Execution this fuction will validate Point 4 of SDET-Test.
convertCuriosity1000SolToEarthDays();


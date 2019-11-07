import React, { useState, useEffect }  from 'react';
import movieAPI from '../../services/movieAPI';
import './index.css';


const Media = (props) => {

const [medias, setMedias] = useState([]);

    let media = props.match.params.media; 
    let id = props.match.params.id;

    console.log("props",props.match.params.id, props.match.params.media);

    async function mediaDetails() { 

       const details = await movieAPI.media(media,id)
       .then(res => {
           console.log("data collected :", res.data, "me",res.data.mediaDetails);
           return res.data;
           
       })
       .catch(err => {
           console.log(err);
       });
       setMedias(details.mediaDetails);
       console.log("const details of the media  = ", details,"mediadetails", details.mediaDetails);
       }
   
       useEffect(() => {
       mediaDetails();
       }, []); 

   console.log("media", medias);
   console.log("birth", medias["birthday"]);

    return (

        <div>Média
        {medias["birthday"]} {medias["title"]} {medias["name"]}

    </div> 
    )
    
} 

export default Media;
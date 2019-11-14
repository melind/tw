import React, { useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';
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

        <div className="media" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${medias["backdrop_path"]})`, backgroundSize: 'cover'}}> 
            Média 
        {medias["birthday"]} {medias["title"]} {medias["name"]} {medias["release_date"]} <br/> {medias["overview"]} 
        <Link to="/home">Accueil</Link>
    </div> 
    )
    
} 

export default Media;
import React, { useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import './index.css';
import { Card } from 'antd';

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

  const { Meta } = Card;

    return (

        <div className="media" style={{backgroundImage:`url()`, backgroundSize: 'cover'}}> 
            <Link to="/home"><p>Accueil</p></Link>
            <h1>Média </h1>
            
            <Card > 
            <Card.Grid className=" m"><img src={medias["profile_path"] ? `https://image.tmdb.org/t/p/w500/${medias["profile_path"]}` : `https://image.tmdb.org/t/p/w500/${medias["backdrop_path"]}`} />
            </Card.Grid>
            <p>  {medias["name"]? medias["name"] : medias["title"]} {medias["release_date"] ? medias["release_date"] : ""} <br/> <br/> {medias["biography"] ? medias["biography"]: medias["overview"] } </p>
        </Card >
    </div> 
    )
    
} 

export default Media;
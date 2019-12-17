import React, { useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import './index.css';
import { Card } from 'antd';

const Media = (props) => {

const [medias, setMedias] = useState([]);

    let media = props.match.params.media; 
    let id = props.match.params.id;

 

    async function mediaDetails() { 

       const details = await movieAPI.media(media,id)
       .then(res => {
          
           return res.data;
           
       })
       .catch(err => {
          
       });
       setMedias(details.mediaDetails);
       
       }
   
       useEffect(() => {
       mediaDetails();
       }, []); 




    return (

        <div className="media" style={{backgroundImage:`url()`, backgroundSize: 'cover'}}> 
            <p><Link to="/home">Accueil</Link></p><p><a href="javascript:history.go(-1)">Retour</a></p>
            <h1>Média </h1>
            
            <Card > 
            <Card.Grid className=" m"><img src={medias["profile_path"] ? `https://image.tmdb.org/t/p/w500/${medias["profile_path"]}` : `https://image.tmdb.org/t/p/w500/${medias["backdrop_path"]}`} alt="du média sélectionné"/>
            </Card.Grid>
            <p>  {medias["name"]? medias["name"] : medias["title"]} {medias["release_date"] ? medias["release_date"] : ""} <br/> <br/> {medias["biography"] ? medias["biography"]: medias["overview"] } </p>
        </Card >
    </div> 
    )
    
} 

export default Media;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';

const GenresTv = (props) => {


  const [tvShows, setTvShows] = useState([]);
    console.log("props",props.match.params.id); 
    let id = props.match.params.id;
    async function tvShowsByGenreList() { 
       const genreTvShows = await movieAPI.tvShowsByGenres(id)
       .then(res => {
           console.log("data collected :", res.data);
           return res.data;
           
       })
       .catch(err => {
           console.log(err);
       });
       setTvShows(genreTvShows.tvShowGenre.results);
       console.log("const list of tvShows  = ", genreTvShows, genreTvShows.tvShowGenre.results);
       }
   
       useEffect(() => {
       tvShowsByGenreList();
       }, []); 

   console.log("tvShows", tvShows);
   
   
  
    return (
      <div className="genresTv"> 
      <Link to="/home">Accueil</Link> < br/>
      <ul >{tvShows.map((result) => <Link  to={`/media/tv/${result.id}`} target="_parent" key={result.id}>
      <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de série"/>
        <li  key={result.id}>{result.name} </li></Link>)}
      </ul>
        </div>
        
    )
    
}
  


export default GenresTv;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';

const Genres = (props) => {


  const [movies, setMovies] = useState([]);
    console.log("props",props.match.params.id); 

    let id = props.match.params.id;

    async function moviesByGenreList() { 

       const genreMovies = await movieAPI.moviesByGenres(id)
       .then(res => {
           console.log("data collected :", res.data);
           return res.data;
           
       })
       .catch(err => {
           console.log(err);
       });
       
       setMovies(genreMovies.moviesGenre.results);
       console.log("const list of movies  = ", genreMovies, genreMovies.moviesGenre.results);
       }
   
       useEffect(() => {
       moviesByGenreList();
       }, []); 

   console.log("movies", movies);
   
   
  
    return (
      <div>
      
      <ul >{movies.map((result) => <Link  to={`/media/movie/${result.id}`} target="_parent" key={result.id}><li  key={result.id}>{result.title}</li></Link>)}</ul>

      <Link to="/home">Accueil</Link>
        </div>
        
    )
    
}
  


export default Genres;
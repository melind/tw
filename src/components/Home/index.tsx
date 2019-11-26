import React, { useState, useEffect } from 'react';
import {  Link  } from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import userAPI from '../../services/userAPI';
import Nav from '../../containers/Nav';

const Home = () => {


userAPI.home();

const [nowMovie, setNowMovie] = useState([]);

 async function movies() { 
    const movie = await movieAPI.nowPlaying()
    .then(res => {
        console.log("data collected :", res.data);
        return res.data; 
        
    })
    .catch(err => {
        console.log(err);
    });
    setNowMovie(movie.moviePlaying.results);
    console.log("const movie = ",movie);
    }

    useEffect(() => {
    movies();;
    }, []); 
console.log("nowmovie",nowMovie);

    return (
        <div className="home" >
            
        <Nav   />
        <div className="nowmovies">
            {nowMovie.map((result) => 
                 <Link className="now" to={`/media/movie/${result.id}`} key={result.id} target="_parent" >
                            <div  key={result.id}><h4>{result.title}</h4><img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de film"/> 
                            </div>
                 </Link> 
           )}
            
        </div>
        <Link to="/mentions"><p>Mentions Légales</p></Link>
        <a target="_blank" href="/icons/set/searchlight" rel="noopener noreferrer">Projecteur icon</a> by <a target="_blank" href="https://icones8.fr" rel="noopener noreferrer">Icons8</a>
        </div> 
    )
    
} 

export default Home;
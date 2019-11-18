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
        <div>
            
        <Nav   />
        <div className="nowmovies">{nowMovie.map((result) => <Link className="now" to={`/media/movie/${result.id}`} key={result.id} target="_parent" ><div  key={result.id}>{result.title} <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de film"/> </div></Link> )}</div>
        <a target="_blank" href="/icons/set/searchlight">Projecteur icon</a> by <a target="_blank" href="https://icones8.fr">Icons8</a>
        </div> 
    )
    
} 

export default Home;
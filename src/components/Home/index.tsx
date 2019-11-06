import React, { useState, useEffect } from 'react';
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
    movies();
    }, []); 
console.log("nowmovie",nowMovie);


    return (
        <div>
            
        <Nav  loggedout onClick/>
        Hi <ul>{nowMovie.map((result) => <li key={result.id}>{result.title} <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de film"/></li>)}</ul>
        
        </div> 
    )
    
} 

export default Home;
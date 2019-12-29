import React, { useState, useEffect } from 'react';
import {  Link  } from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import userAPI from '../../services/userAPI';
import Nav from '../../containers/Nav';

const Home = () => {


userAPI.home();
// creation of a variable that will contain the data researched
const [nowMovie, setNowMovie] = useState([]);

// collect of data by our API movieAPI
 async function movies() { 
    const movie = await movieAPI.nowPlaying()
    .then(res => {
        
        return res.data; 
        
    })
    .catch(err => {
        
    });

    // setting variable with the datacolected
    setNowMovie(movie.moviePlaying.results);
    
    }

    useEffect(() => {
    movies();
    }, []); 


    return (
        <div className="home" >
            
        <Nav   /> <br/>Films à l'affiche
        <div className="nowmovies">
           
            {nowMovie.map((result) => 
                 <Link className="now" to={`/media/movie/${result.id}`} key={result.id} target="_parent" >
                            <div  key={result.id}><h4>{result.title}</h4><img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de film"/> 
                            </div>
                 </Link> 
           )}
            
        </div>
        <a target="_blank" href="/icons/set/searchlight" rel="noopener noreferrer">Projecteur icon</a> by <a target="_blank" href="https://icones8.fr" rel="noopener noreferrer">Icons8</a>
        </div> 
    )
    
} 

export default Home;

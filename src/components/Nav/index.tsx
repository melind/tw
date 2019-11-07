import React, {useState, useEffect} from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';
import userAPI from '../../services/userAPI';
import movieAPI from '../../services/movieAPI';

const Nav = ({loggedout, onClick}) => {

  console.log( "loggedout",loggedout);

  const logOut = () => {
   userAPI.logOut();
   console.log(  "loggedout after", loggedout);
   onClick(loggedout);
  }
 
  const [genre, setGenre] = useState([]);
  const [genreTv, setGenreTv] = useState([]);

    async function listOfGenres() { 
       const listGenres = await movieAPI.genres()
       .then(res => {
           console.log("data collected :", res.data);
           return res.data;
       })
       .catch(err => {
           console.log(err);
       });
       setGenre(listGenres.genres.genres);
       console.log("const listgenre = ",listGenres, listGenres.genres.genres);
       }
   
    async function listOfTvGenres() { 
     const listGenres = await movieAPI.genresTv()
     .then(res => {
         console.log("data collected :", res.data);
         return res.data;
     })
     .catch(err => {
         console.log(err);
     });
     setGenreTv(listGenres.genres.genres);
     console.log("const listgenreTv = ",listGenres, listGenres.genres.genres);
     }

       useEffect(() => {
       listOfGenres(); listOfTvGenres();
       }, []); 

   console.log("genre", genre,"genreTv", genreTv);
   
   if (loggedout) {
      
    return <Redirect to="/" />;
}
  
  
    return (
      <div>
      <ul >movies {genre.map((result) => <li  key={result.id}>{result.name} </li>)}</ul>
      <ul >tv shows {genreTv.map((result) => <li  key={result.id}>{result.name} </li>)}</ul>
        <button type="submit" onClick={logOut} >deconnectez-vous</button>
        </div>
        
    )
    
}
  


export default Nav;
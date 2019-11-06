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
   
       useEffect(() => {
       listOfGenres();
       }, []); 

   console.log("genre", genre);
   
   if (loggedout) {
      
    return <Redirect to="/" />;
}
  
  
    return (
      <div>
      <ul >{genre.map((result) => <li  key={result.id}>{result.name} </li>)}</ul>
        <button type="submit" onClick={logOut} >deconnectez-vous</button>
        </div>
        
    )
    
}
  


export default Nav;
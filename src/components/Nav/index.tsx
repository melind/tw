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
  const [search, setSearch] = useState("");
  const [searchMediaResult, setSearchMediaResult] = useState([]);

 // const regex = /( )*/;
 // const regexSearch = regex.test(search);

  const handleChange = event => {
      setSearch(event.target.value); 
      console.log("search",search);
      searchMedia(search);
      }; 

    async function listOfGenres() { 
       const listGenres = await movieAPI.genres()
       .then(res => {
           console.log("data collected movie genre:", res.data);
           return res.data;
       })
       .catch(err => {
           console.log(err);
       });
       setGenre(listGenres.genres.genres);
       console.log("const listgenre (movie) = ",listGenres, listGenres.genres.genres);
       }
   
    async function listOfTvGenres() { 
     const listGenres = await movieAPI.genresTv()
     .then(res => {
         console.log("data collected tv genre:", res.data);
         return res.data;
     })
     .catch(err => {
         console.log(err);
     });
     setGenreTv(listGenres.genres.genres);
     console.log("const listgenreTv = ",listGenres, listGenres.genres.genres);
     }

    async function searchMedia(search) { 
        console.log("search de media", search);
     const searchMedias = await movieAPI.search({"search":search})
     .then(res => {
         console.log("data collected search results:", res.data);
         return res.data;
     })
     .catch(err => {
         console.log(err);
     });
     setSearchMediaResult(searchMedias);
     console.log("const searchMedias = ",searchMedias);
     }

       useEffect(() => {
       listOfGenres(); listOfTvGenres(); 
       }, []); 

   console.log("genre", genre,"genreTv", genreTv, "searchMediaResult", searchMediaResult);
   
   if (loggedout) {
      
    return <Redirect to="/" />;
}
  
  
    return (
      <div>
      <ul >movies {genre.map((result) => <li  key={result.id}>{result.name} </li>)}</ul>
      <ul >tv shows {genreTv.map((result) => <li  key={result.id}>{result.name} </li>)}</ul>
       <form action="" method="POST ">
       <input name="search" placeholder="Recherche de films/séries/aceurs..." value={search} onChange={handleChange} />
       </form>
        <button type="submit" onClick={logOut} >deconnectez-vous</button>
        </div>
        
    )
    
}
  


export default Nav;
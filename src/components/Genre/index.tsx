import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import { Card, Pagination } from 'antd';

const Genres = (props) => {


  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
    console.log("props",props.match.params.id); 

/*------------------movie genre------------------------*/

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
       console.log("const listgenre (movie) = ",listGenres.genres.genres);
       }

/*------------------movies by genre list------------------------*/

    let id = props.match.params.id;

    async function moviesByGenreList() { 

       const genreMovies = await movieAPI.moviesByGenres(id,page)
       .then(res => {
           console.log("data collected :", res.data);
           return res.data;
           
       })
       .catch(err => {
           console.log(err);
       });
       setMovies(genreMovies.moviesGenre.results);
       setPages(genreMovies.moviesGenre.total_pages);
       console.log("const list of movies  = ", genreMovies, genreMovies.moviesGenre.results, "pages",genreMovies.moviesGenre.total_pages, "page", genreMovies.moviesGenre.page);
       }
   
       useEffect(() => {
       listOfGenres();  
       }, []); 

       useEffect(() => {
       moviesByGenreList();
       }, [page]); 

    

   console.log("movies", movies);
   
     const onChange = page => {
      console.log(page);
      setPage( page);
    };

   const { Meta } = Card;
  



    return (
      <div className="genreMovie">
      <div className="acc"><Link to="/home">Accueil</Link> </div>

      <Card title={genre.map((result)=> (result.id != id) ? "" : result.name)} className="card" >
      {movies.map((result) => 
             
          <Link  to={`/media/movie/${result.id}`} target="_parent" key={result.id}>

              <Card.Grid className="grid" key={result.id}>
                <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de film" />
                <Meta title={result.title}/>
              </Card.Grid>

          </Link>)}
          </Card>
         <div className="pagination"><Pagination className="pagination" current={page} total={pages} onChange={onChange} /></div>
      
      </div>
        
    )
    
}
  


export default Genres;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import { Card, Pagination, BackTop } from 'antd';

const Genres = (props) => {


  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
   

/*------------------movie genre------------------------*/

async function listOfGenres() { 
       const listGenres = await movieAPI.genres()
       .then(res => {
           
           return res.data;
       })
       .catch(err => {
         
       });
       setGenre(listGenres.genres.genres);
      
       }

/*------------------movies by genre list------------------------*/

    let id = props.match.params.id;

    async function moviesByGenreList() { 

       const genreMovies = await movieAPI.moviesByGenres(id,page)
       .then(res => {
           
           return res.data;
           
       })
       .catch(err => {
          
       });
       setMovies(genreMovies.moviesGenre.results);
       setPages(genreMovies.moviesGenre.total_pages);
      
       }
   
       useEffect(() => {
       listOfGenres();  
       }, []); 

       useEffect(() => {
       moviesByGenreList();
       }, [page]); 

    

  
   
     const onChange = page => {
     
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
         <BackTop>
           <div className="up">UP</div>
         </BackTop>
      </div>
        
    )
    
}
  


export default Genres;
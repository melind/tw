import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import { Card, Pagination } from 'antd';

const GenresTv = (props) => {


  const [tvShows, setTvShows] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

    console.log("props",props.match.params.id); 
    let id = props.match.params.id;
    
    async function tvShowsByGenreList() { 
       const genreTvShows = await movieAPI.tvShowsByGenres(id,page)
       .then(res => {
           console.log("data collected :", res.data);
           return res.data;
           
       })
       .catch(err => {
           console.log(err);
       });
       setTvShows(genreTvShows.tvShowGenre.results);
       setPages(genreTvShows.tvShowGenre.total_pages);
       console.log("const list of tvShows  = ", genreTvShows, genreTvShows.tvShowGenre.results);
       }
   
       useEffect(() => {
       tvShowsByGenreList();
       }, [page]); 

   console.log("tvShows", tvShows);

   const onChange = page => {
    console.log(page);
    setPage( page);
  };
   
   const { Meta } = Card;
  
    return (
      <div className="genresTv"> <Pagination current={page} total={pages} onChange={onChange} />
      <Link to="/home">Accueil</Link> < br/>
      {tvShows.map((result) => 
        <Link  to={`/media/tv/${result.id}`} target="_parent" key={result.id}>
      
          <Card.Grid className="grid" key={result.id}>
             <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de série"/>
             <Meta title={result.name}/> 
          </Card.Grid>
        </Link>)}
      
        </div>
        
    )
    
}
  


export default GenresTv;
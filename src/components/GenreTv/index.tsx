import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import movieAPI from '../../services/movieAPI';
import { Card, Pagination, BackTop } from 'antd';

const GenresTv = (props) => {

// creation of a variables that will contain the data researched

  const [tvShows, setTvShows] = useState([]);
  const [genreTv, setGenreTv] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);


/*------------------tv shows genres------------------------*/
// collect of data by our API movieAPI
    async function listOfTvGenres() { 
     const listGenres = await movieAPI.genresTv()
     .then(res => {
         
         return res.data;
     })
     .catch(err => {
         
     });

     // setting variable with the datacolected
     setGenreTv(listGenres.genres.genres);
     
     }

    
    
/*------------------tv shows by genre list------------------------*/
  
    let id = props.match.params.id;

    async function tvShowsByGenreList() { 
       const genreTvShows = await movieAPI.tvShowsByGenres(id,page)
       .then(res => {
           
           return res.data;
           
       })
       .catch(err => {
           
       });
       setTvShows(genreTvShows.tvShowGenre.results);
       setPages(genreTvShows.tvShowGenre.total_pages);
       
       }

      useEffect(() => {
      listOfTvGenres(); 
       }, []); 

       useEffect(() => {
       tvShowsByGenreList();
       }, [page]); 



   const onChange = page => {
    
    setPage( page);
  };
   
   const { Meta } = Card;
  
    return (
      <div className="genresTv">
         <div className="acc"><Link to="/home">Accueil</Link> </div>
  
      <Card title ={genreTv.map((result)=> (result.id != id) ? "" : result.name)} className="card">
      {tvShows.map((result) => 
        <Link  to={`/media/tv/${result.id}`} target="_parent" key={result.id}>
      
          <Card.Grid className="grid" key={result.id}>
             <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="affiche de série"/>
             <Meta title={result.name}/> 
          </Card.Grid>
        </Link>)} 
        </Card>
        <div className="paginations"><Pagination  current={page} total={pages} onChange={onChange} /></div>
        <BackTop>
           <div className="up">UP</div>
         </BackTop>
        </div>
        
    )
    
}
  


export default GenresTv;
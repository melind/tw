import React, {useState, useEffect} from 'react';
import './index.css';
import { Redirect, Link} from 'react-router-dom';
import userAPI from '../../services/userAPI';
import movieAPI from '../../services/movieAPI';

const Nav = ({loggedout, onClick, init}) => {

init();
  console.log( "loggedout",loggedout);

  const logOut = () => {
  userAPI.logOut();
   onClick();

  }
   console.log(  "loggedout after", loggedout);
 
 
  const [genre, setGenre] = useState([]);
  const [genreTv, setGenreTv] = useState([]);
  const [search, setSearch] = useState("");
  const [searchMediaResult, setSearchMediaResult] = useState([]);

  const handleChange = event => { 
        
    setSearch(event.target.value); 
    console.log("search",search);
    searchMedia(search);

  }; 

/*------------------movie genres------------------------*/

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
   /*------------------tv shows genres------------------------*/

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
/*------------------ search bar ------------------------*/

    const regex = /( )*/;
    const regexSearch = regex.test(search);
    
    
    async function searchMedia(search) { 
        console.log("search de media", search);
     const searchMedias = await movieAPI.search({"search":search})
     .then(res => {
         console.log("data collected search results:", res.data.media.results);
         
         return res.data.media.results;
         
     })
     .catch(err => {
         console.log(err);
     });
     setSearchMediaResult(searchMedias);
     console.log("const searchMedias = ",searchMedias);
     }


  
  
       /* const hide = () => {//eviter collection de htmlThat's because the getElementsByClassName returns a live collectio
           const hidden = document.getElementsByClassName('.result')[0] as HTMLElement;
           hidden.style.display='none';
        };
  
        const show = () => {
            if(regex.test(search) === false ){ 
                const showing = document.getElementsByClassName('.selectoption')[0] as HTMLElement;
                showing.style.display='block';
            }
        };
        const selectedFilm = event => {
          if(regex.test(search) === false ){ 
        const selectedMovie = document.getElementById('#film')[0] as HTMLElement;
         selectedMovie.style.display='block';

        const selectedTv = document.getElementById('#serie')[0] as HTMLElement;
        selectedTv.style.display='none';
          }
      };
      const selectedSerie = event => {
          if(regex.test(search) === false ){ 
            const selectedMovie = document.getElementById('#serie')[0] as HTMLElement
            selectedMovie.style.display='block';
            const selectedTv = document.getElementById('#film')[0] as HTMLElement
            selectedTv.style.display='none';
          }
      };*/

       useEffect(() => {
       listOfGenres(); listOfTvGenres(); 
       }, []); 
       useEffect(() => {
        searchMedia(search);
      }, [search]);

   console.log("genre", genre,"genreTv", genreTv, "searchMediaResult", searchMediaResult);
  if(loggedout) return <Redirect to="/" />

    return (
      <div className="nav">
        <div>
            Film 
            <ul className="genres" > {genre.map((result) => <Link  to={`/genres/${result.id}`} target="_parent" key={result.id}>
                <li key={result.id} >{result.name} </li> </Link> )}
            </ul>
        </div>

        <div>
            Série 
            <ul className="genres" > {genreTv.map((result) => <Link  to={`/genrestv/${result.id}`} target="_parent" key={result.id}> 
                <li key={result.id}>{result.name}</li> </Link>)}
            </ul>
        </div>
         
        <div className="search-container" >
                <form  action="" method="POST ">
                    <div className="searchplace"  >
                        <input placeholder="Recherche de films/séries/aceurs..." value={search} onChange={handleChange} />
                    
                        <br/>
                        <div className="selectoption"  >
                        <a  href="#film"className="selected"><div>Film</div></a>
                        <a href="#serie"  className="selected"><div>Série</div></a>
                        <a href="#actor" className="selected"><div>Acteur</div></a>
                        </div>

                         <ul className="result" id="film"  >{searchMediaResult && searchMediaResult.map((result => 
                         result["media_type"] === "movie" ? ( <Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <li >{result.title}</li></Link>) : ""))}
                        </ul>

                         <ul className="result" id="serie"  >{searchMediaResult && searchMediaResult.map((result => 
                         result["media_type"] === "tv" ?  ( <Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <li >{result.original_name}</li></Link>) : ""))}
                         </ul>
 
                         <ul className="result" id="actor"  >{searchMediaResult && searchMediaResult.map((result =>   
                         result["media_type"] === "person" ? (<Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <li >{result.name}</li></Link>) : ""))}
                        </ul>

                    </div>
             </form>
      
         </div>
    <div> 
        <Link to="/account" >Mon compte</Link> <br />
        <Link to="/" onClick={logOut}>deconnectez-vous</Link>
    </div>
       
</div>
        
    )
    
}
  


export default Nav;
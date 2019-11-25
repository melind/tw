import React, {useState, useEffect} from 'react';
import './index.css';
import { Redirect, Link} from 'react-router-dom';
import userAPI from '../../services/userAPI';
import movieAPI from '../../services/movieAPI';
import {Menu, Input, List} from 'antd';
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
 


  
        const show = () => {
            
                const film = document.getElementsByClassName('selected')[0] as HTMLElement;
                const serie = document.getElementsByClassName('selected')[1] as HTMLElement;
                const acteur = document.getElementsByClassName('selected')[2] as HTMLElement;
                const res = document.getElementsByClassName('res')[0] as HTMLElement;
                film.style.display='block';serie.style.display='block';acteur.style.display='block';
                res.style.display='block';
        
       };
       const hide = () => {
              
                const film = document.getElementsByClassName('selected')[0] as HTMLElement;
                const serie = document.getElementsByClassName('selected')[1] as HTMLElement;
                const acteur = document.getElementsByClassName('selected')[2] as HTMLElement;
                const res = document.getElementsByClassName('res')[0] as HTMLElement;
                film.style.display='none';serie.style.display='none';acteur.style.display='none';
                res.style.display='none';
       };

      
       
        const selectedFilm = event => {
         if (document.getElementById('#film')) { 
        const selectedMovie = document.getElementById('#film')[0] as HTMLElement;
         selectedMovie.style.display='block';

        const selectedTv = document.getElementById('#serie')[0] as HTMLElement;
        selectedTv.style.display='none';
          }
          
      };
      const selectedSerie = event => {
         if( document.getElementById('#serie')){
            const selectedTv = document.getElementById('#serie')[0] as HTMLElement
            selectedTv.style.display='block';
            const selectedMovie = document.getElementById('#film')[0] as HTMLElement
            selectedMovie.style.display='none';
           }
      };

       useEffect(() => {
       listOfGenres(); listOfTvGenres(); 
       }, []); 
       useEffect(() => {
        searchMedia(search);
      }, [search]);

   console.log("genre", genre,"genreTv", genreTv, "searchMediaResult", searchMediaResult);
  if(loggedout) return <Redirect to="/" />
  const { SubMenu } = Menu;
    return (
      <Menu className="nav" >
        <Menu.Item className="oscar">  
                <Link to="/admin" >< img  src="../../../images/oscar.png" alt="image d'un oscar avec des rouleaux de diapositives de film en arrière plan" /></Link>
        </Menu.Item>  
            
            <SubMenu title="Film par genre"  className="genres" >  {genre.map((result) => 
                <Menu.Item  className="genre" key={result.id} ><Link   to={`/genre/${result.id}`} target="_parent" key={result.id}>{result.name} </Link></Menu.Item > )}
            </SubMenu>
   
        
            <SubMenu title="Série par genre" className="genres" > {genreTv.map((result) => 
                <Menu.Item className="genre" key={result.id}><Link  to={`/genretv/${result.id}`} target="_parent" key={result.id}>{result.name}</Link></Menu.Item> )}
            </SubMenu>
       
         
        <Menu className="search-container">
                <form  action="" method="POST ">
                    <div className="searchplace"onMouseOut={hide} onClick={show} onMouseOver={show}>
                        < img src="../../../images/projecteur.png" /><Input placeholder="Recherche de films/séries/aceurs..." value={search} onChange={handleChange} onClick={show}  />
                    
                        <div className="res">
                        <Menu className="selectoption" >
                        <a href="#film"className="selected"  onClick={selectedFilm} ><div >Film</div></a>
                        <a href="#serie"  className="selected"  onClick={selectedSerie} ><div >Série</div></a>
                        <a href="#actor" className="selected"  ><div>Acteur</div></a>
                        </Menu>

                         <List className="result"header="film" id="film"  >{searchMediaResult && searchMediaResult.map((result => 
                         result["media_type"] === "movie" ? ( <Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <List.Item className="li">{result.title}</List.Item></Link>) : ""))}
                        </List>


                         <List className="result" header="série" id="serie"  >{searchMediaResult && searchMediaResult.map((result => 
                         result["media_type"] === "tv" ?  ( <Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <List.Item className="li">{result.original_name}</List.Item></Link>) : ""))}
                         </List>

 
                         <List className="result"  header="acteur" id="actor"  >{searchMediaResult && searchMediaResult.map((result =>   
                         result["media_type"] === "person" ? (<Link  to={`/media/${result.media_type}/${result.id}`} target="_parent" key={result.id}>
                             <List.Item className="li">{result.name}</List.Item></Link>) : ""))}
                        </List>
</div>
                    </div>
             </form>
      
         </Menu> 
    <List className="user"> 
       <List.Item className="t"> < img src="../../../images/star.png" alt="icone d'une étoile jaune" /></List.Item>
       <List.Item className="t"> <Link  to="/account" >Mon compte</Link>  </List.Item>
       <List.Item className="t"> <Link to="/" onClick={logOut}>déconnectez-vous</Link></List.Item>
    </List>
       
</Menu>
        
    )
    
}
  


export default Nav;
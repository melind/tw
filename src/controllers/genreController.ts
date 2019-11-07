import {Request, Response} from 'express';
import axios from 'axios';

export default class GenreController {


     static async genresMovieList(request: Request, response: Response) {


 /*--------------get api key and the url of the  external api -------------------*/
        const API_KEY = process.env.API_KEY
        const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
       
       /* -------------get data of the external api---------*/
        const genres = await axios.get(genresUrl)
            .then((res) =>{ return res.data})
            .catch(err => {console.log(err); });
        

        response.status(200).json({
                                    genres
                                   });

           console.log("Hello from list of genres");

        
          
    }

       static async moviesByGenre(request: Request, response: Response) {

        let id = request.params.id;
/*--------------get api key and the url of the  external api -------------------*/
        const API_KEY = process.env.API_KEY
          
        const moviesGenreUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&language=fr-FR`
       /* -------------get data of the external api---------*/
          
        const moviesGenre = await axios.get(moviesGenreUrl)
        .then((res) =>{ return res.data})
        .catch(err => {console.log(err); });
          
          
        response.status(200).json({
                                    moviesGenre
                                   });
                                  
           console.log("Hello from list of movie by genre");
    
      
    }

    static async genresListTvShow(request: Request, response: Response) {


        /*--------------get api key and the url of the  external api -------------------*/
               const API_KEY = process.env.API_KEY
               const genresTvShowUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=fr-FR`
              
              /* -------------get data of the external api---------*/
               const genres = await axios.get(genresTvShowUrl)
                   .then((res) =>{ return res.data})
                   .catch(err => {console.log(err); });
               
       
               response.status(200).json({
                                           genres
                                          });
       
                  console.log("Hello from list of genres for the tv shows");
       
               
                 
           }
       
              static async tvShowByGenre(request: Request, response: Response) {
       
               let id = request.params.id;
       /*--------------get api key and the url of the  external api -------------------*/
               const API_KEY = process.env.API_KEY
                 
               const tvShowsGenreUrl =  `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}&language=fr-FR`
              /* -------------get data of the external api---------*/
                 
               const tvShowGenre = await axios.get(tvShowsGenreUrl)
               .then((res) =>{ return res.data})
               .catch(err => {console.log(err); });
                 
                 
               response.status(200).json({
                                           tvShowGenre
                                          });
                                         
                  console.log("Hello from list of tv shows by genre");
           
             
           }
    
           

}
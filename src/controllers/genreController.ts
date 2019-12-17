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
            .catch(err => { });
        

        response.status(200).json({
                                    genres
                                   });

   

        
          
    }

       static async moviesByGenre(request: Request, response: Response) {

        let id = request.params.id;
        let number = request.params.number;
/*--------------get api key and the url of the  external api -------------------*/
        const API_KEY = process.env.API_KEY
          
        const moviesGenreUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${number}&language=fr-FR`
       /* -------------get data of the external api---------*/
          
        const moviesGenre = await axios.get(moviesGenreUrl)
        .then((res) =>{ return res.data})
        .catch(err => { });
          
          
        response.status(200).json({
                                    moviesGenre
                                   });
                                  
       
    
      
    }

    static async genresListTvShow(request: Request, response: Response) {


        /*--------------get api key and the url of the  external api -------------------*/
               const API_KEY = process.env.API_KEY
               const genresTvShowUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=fr-FR`
              
              /* -------------get data of the external api---------*/
               const genres = await axios.get(genresTvShowUrl)
                   .then((res) =>{ return res.data})
                   .catch(err => {; });
               
       
               response.status(200).json({
                                           genres
                                          });
       
             
       
               
                 
           }
       
              static async tvShowByGenre(request: Request, response: Response) {
       
               let id = request.params.id;
               let number = request.params.number;
       /*--------------get api key and the url of the  external api -------------------*/
               const API_KEY = process.env.API_KEY
                 
               const tvShowsGenreUrl =  `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}&page=${number}&language=fr-FR`
              /* -------------get data of the external api---------*/
                 
               const tvShowGenre = await axios.get(tvShowsGenreUrl)
               .then((res) =>{ return res.data})
               .catch(err => { });
                 
                 
               response.status(200).json({
                                           tvShowGenre
                                          });
                
           
             
           }
    
           

}